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
    public function index()
    {
        $devices = Device::with([
            'check_items',
            'location',
            'maintain_logs' => function ($query) {
                $query->latest();
            }
        ])->latest()->paginate(10);

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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeviceRequest $request)
    {
        $device = null;

        try {
            DB::transaction(function () use ($request, &$device) {
                $device = Device::create($request->only('name', 'sn', 'location_id', 'type', 'model', 'expired_at', 'desc', 'image'));

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
     * @param  \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        return new DeviceResource($device->loadMissing([
            'location', 'check_items', 'maintain_logs' => function ($query) {
                $query->latest()->limit(1);
            }
        ]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Device $device
     * @return \Illuminate\Http\Response
     */
    public function update(DeviceRequest $request, Device $device)
    {
        try {
            $device->update($request->only('name', 'sn', 'location_id', 'type', 'model', 'expired_at', 'desc', 'image'));

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
     * @param  \App\Models\Device $device
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
}
