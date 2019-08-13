<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeviceRequest;
use App\Http\Resources\DeviceResource;
use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DevicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $type = $request->input('type');
        $status = $request->input('status', null);
        $location_id = $request->input('location_id', null);
        $search = $request->input('search', '');
        $needCheck = $request->input('need_check', null);
        $expire = $request->input('expire', null);

        $devices = Device::with([
            'check_items',
            'location',
            'maintain_log',
            'maintain_logs' => function ($query) {
                $query->latest();
            }
        ])->when($type, function ($query, $type) {
            $query->where('type', $type);
        })->when($status != null, function ($query) use ($status) {
            $query->where('status', $status);
        })->when($location_id, function ($query, $location_id) {
            $query->where('location_id', $location_id);
        })->when($search, function ($query, $search) {
            $query->where('name', 'like', "%{$search}%")->orWhere('sn', 'like', "%{$search}%");
        })->when($needCheck != null, function ($query) {
            $query->needCheck();
        })->when($expire, function ($query) {
            $query->expire();
        })->latest()->paginate(10);

        return DeviceResource::collection($devices)->additional([
            'curPage' => $devices->currentPage(),
            'totalPage' => $devices->lastPage(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeviceRequest $request)
    {
        $device = null;

        try {
            DB::transaction(function () use ($request, &$device) {
                $device = Device::create($request->only('name', 'sn', 'location_id', 'type', 'model', 'expired_at', 'desc', 'image', 'interval'));

                foreach ($request->input('check_items', []) as $item) {
                    $device->check_items()->create([
                        'name' => $item['name'],
//                        'desc' => $item['desc'],
                    ]);
                }

                $device->refresh();
            });
        } catch (\Throwable $e) {
            return response([
                'message' => '添加失败',
                'exception' => $e->getMessage(),
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => '添加成功',
            'data' => new DeviceResource($device->loadMissing('check_items', 'location'))
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        return new DeviceResource($device->load([
            'location', 'check_items', 'maintain_logs' => function ($query) {
                $query->latest()->limit(1);
            }
        ]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function update(DeviceRequest $request, Device $device)
    {
        try {
            $device->update($request->only('name', 'sn', 'location_id', 'type', 'model', 'expired_at', 'desc', 'image', 'interval'));

            $items = collect();

            foreach ($request->input('check_items', []) as $item) {
                $items->push($device->check_items()->firstOrCreate([
                    'name' => $item['name'],
//                        'desc' => $item['desc'],
                ]));
            }

            $device->check_items()->whereNotIn('id', $items->pluck('id')->toArray())->delete();

            $device->refresh();
        } catch (\Throwable $e) {
            return response([
                'message' => '保存失败',
                'exception' => $e->getMessage(),
                'traces' => $e->getTrace()
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => '保存成功',
            'data' => new DeviceResource($device->loadMissing('check_items', 'location'))
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        try {
            $device->delete();
        } catch (\Exception $e) {
            return response([
                'message' => '删除失败',
                'code' => 50000,
                'exception' => $e->getMessage()
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => '删除成功'
        ]);
    }

    public function batchUpdate(Request $request)
    {
        $this->validate($request, [
            'devices' => ['required', 'array'],
            'devices.*.id' => ['required', 'exists:devices,id'],
            'devices.*.name' => ['required'],
            'devices.*.sn' => ['required'],
            'devices.*.location_id' => ['required', 'exists:locations,id'],
            'devices.*.type' => ['nullable'],
            'devices.*.model' => ['nullable'],
            'devices.*.expired_at' => ['required'],
            'devices.*.interval' => ['required'],
            'devices.*.desc' => ['nullable'],
            'devices.*.check_items' => ['nullable'],
            'devices.*.check_items.*.name' => ['nullable'],
        ]);
        $ids = [];
        try {
            DB::transaction(function () use ($request, &$ids) {
                foreach ($request->input('devices') as $arr) {
                    $ids[] = $arr['id'];
                    $device = Device::find($arr['id']);
                    $device->update(collect($arr)->only('name', 'sn', 'location_id', 'type', 'model', 'expired_at', 'desc', 'image', 'interval')->toArray());
                }
            });
        } catch (\Throwable $e) {
            return response([
                'message' => '保存失败'
            ], 400);
        }

        return response([
            'message' => '保存成功',
            'data' => DeviceResource::collection(Device::with('location')->whereIn('id', $ids)->latest()->get())
        ]);
    }
}
