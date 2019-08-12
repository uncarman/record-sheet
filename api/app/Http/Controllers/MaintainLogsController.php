<?php

namespace App\Http\Controllers;

use App\Http\Requests\MaintainLogRequest;
use App\Http\Resources\MaintainLogResource;
use App\Models\DeviceCheckItem;
use App\Models\MaintainLog;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MaintainLogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $location_id = $request->input('location_id');
        $type = $request->input('type');
        $sortBy = $request->input('sort_by', 'created_at');
        $order = $request->input('order', 'desc');

        $maintain_logs = MaintainLog::with('device', 'check_item_logs')->when($location_id, function ($query) use ($location_id) {
            $query->whereHas('device', function ($sub_query) use ($location_id) {
                $sub_query->where('location_id', $location_id);
            });
        })->when($type, function ($query) use ($type) {
            $query->whereHas('device', function ($sub_query) use ($type) {
                $sub_query->where('type', $type);
            });
        })->when($sortBy, function ($query) use ($sortBy, $order) {
            $query->orderBy($sortBy, $order);
        })->paginate(10);

        return MaintainLogResource::collection($maintain_logs)->additional([
            'curPage' => $maintain_logs->currentPage(),
            'totalPage' => $maintain_logs->lastPage(),
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
    public function store(MaintainLogRequest $request)
    {
        $maintain_log = null;

        try {
            DB::transaction(function () use ($request, &$maintain_log) {
                $data = [
                    'abnormal_desc' => $request->input('notes')
                ];
                $maintain_log = MaintainLog::create(array_merge($request->only('device_id', 'result', 'abnormal_desc', 'logger_name', 'logger_phone', 'logger_position', 'photos'), $data));

                foreach ($request->input('check_item_logs', []) as $item) {
                    $check_item = DeviceCheckItem::where('device_id', $request->input('device_id'))->whereKey($item['id'])->firstOrFail();
                    $maintain_log->check_item_logs()->attach($check_item, [
                        'result' => $item['result'],
                    ]);
                }
            });
        } catch (ModelNotFoundException $exception) {
            return response([
                'code' => 500,
                'message' => '添加失败',
                'exception' => "设备检查项不存在",
            ], 404);
        } catch (\Throwable $e) {
            return response([
                'code' => 500,
                'message' => '添加失败',
                'exception' => $e->getMessage(),
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => "添加成功",
            'data' => new MaintainLogResource($maintain_log->loadMissing('check_item_logs', 'device'))
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return \Illuminate\Http\Response
     */
    public function show(MaintainLog $maintainLog)
    {
        return new MaintainLogResource($maintainLog->loadMissing('check_item_logs', 'device'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return \Illuminate\Http\Response
     */
    public function edit(MaintainLog $maintainLog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\MaintainLog $maintainLog
     * @return \Illuminate\Http\Response
     */
    public function update(MaintainLogRequest $request, MaintainLog $maintainLog)
    {
        try {
            $data = [
                'abnormal_desc' => $request->input('notes')
            ];
            $maintainLog->update(array_merge($request->only('result', 'abnormal_desc', 'logger_name', 'logger_phone', 'logger_position', 'photos'), $data));

            $maintainLog->check_item_logs()->sync([]);

            foreach ($request->input('check_item_logs', []) as $item) {
                $check_item = DeviceCheckItem::whereKey($item['id'])->firstOrFail();
                $maintainLog->check_item_logs()->attach($check_item, [
                    'result' => $item['result'],
                ]);
            }
        } catch (ModelNotFoundException $exception) {
            return response([
                'code' => 40000,
                'message' => '保存失败',
                'exception' => "设备检查项不存在",
            ], 404);
        } catch (\Throwable $e) {
            return response([
                'code' => 50000,
                'message' => '保存失败',
                'exception' => $e->getMessage(),
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => "保存成功",
            'data' => new MaintainLogResource($maintainLog->loadMissing('check_item_logs', 'device'))
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return \Illuminate\Http\Response
     */
    public function destroy(MaintainLog $maintainLog)
    {
        try {
            $maintainLog->delete();
        } catch (\Exception $e) {
            return response([
                'code' => 10000,
                'message' => '删除失败'
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => '删除成功'
        ]);
    }
}
