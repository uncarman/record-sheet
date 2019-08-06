<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationRequest;
use App\Http\Resources\LocationResource;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $type = $request->input('type', '');
        $isAll = $request->input('is_all');
        $locations = Location::with([
            'devices', 'devices.maintain_logs' => function ($query) {
                $query->limit(1);
            }
        ])->when($type, function ($query) use ($type) {
            $query->whereHas('devices', function ($sub_query) use ($type) {
                $sub_query->where('type', $type);
            });
        })->latest();
        if ($isAll) {
            $locations = $locations->get();
        } else {
            $locations = $locations->paginate(10);
        }

        return LocationResource::collection($locations);
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
    public function store(LocationRequest $request)
    {
        $location = Location::create($request->only('name', 'manager_name', 'manager_phone'));

        return response([
            'code' => 10000,
            'message' => '添加成功',
            'data' => new LocationResource($location)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        return new LocationResource($location->loadMissing('devices'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Location $location
     * @return \Illuminate\Http\Response
     */
    public function update(LocationRequest $request, Location $location)
    {
        $location->update($request->only('name', 'manager_name', 'manager_phone'));

        return response([
            'code' => 10000,
            'message' => '保存成功',
            'data' => new LocationResource($location)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        try {
            $location->delete();
        } catch (\Exception $e) {
            return response([
                'code' => 50000,
                'message' => '删除失败'
            ], 500);
        }

        return response([
            'code' => 10000,
            'message' => '删除成功'
        ]);
    }
}
