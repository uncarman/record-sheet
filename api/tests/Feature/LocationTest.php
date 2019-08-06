<?php

namespace Tests\Feature;

use App\Models\Device;
use App\Models\Location;
use App\Models\MaintainLog;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LocationTest extends TestCase
{
    public function test_create_location()
    {
        $location = factory(Location::class)->make()->toArray();

        $testResponse = $this->json('post', route('api.locations.store'), $location);

        $testResponse->assertJsonStructure([
            'message',
            'data' => [
                'id',
                'name',
                'manager_name',
                'manager_phone',
            ]
        ])->assertSuccessful();

        $this->assertDatabaseHas((new Location())->getTable(), $location);
    }

    public function test_get_locations()
    {
        $location = factory(Location::class)->create();
        factory(Device::class, 2)->create([
            'location_id' => $location->id
        ])->each(function (Device $device) {
            $device->maintain_logs()->createMany(factory(MaintainLog::class, 2)->make()->toArray());
        });

        $testResponse = $this->json('get', route('api.locations.index'));

        $testResponse->assertJsonStructure([
            'data' => [
                '*' => [
                    'id',
                    'name',
                    'manager_name',
                    'manager_phone',
                    'devices' => [
                        '*' => [
                            'id',
                            'type',
                            'img',
                            'name',
                            'admin',
                            'adminPhone',
                            'notes',
                            'records' => [
                                '*' => [
                                    'pid',
                                    'did',
                                    'id',
                                    'operator',
                                    'operatorPhone',
                                    'status',
                                    'updateTime',
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ])->assertSuccessful();
    }

    public function test_delete_location()
    {
        $location = factory(Location::class)->create();

        $testResponse = $this->json('delete', route('api.locations.destroy', $location));

        $testResponse->assertJsonStructure([
            'message'
        ])->assertSuccessful();

        $this->assertSoftDeleted((new Location())->getTable(), [
            'id' => $location->id
        ]);
    }
}
