<?php

namespace Tests\Feature;

use App\Models\Device;
use App\Models\DeviceCheckItem;
use App\Models\Location;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DeviceTest extends TestCase
{
    public function test_create_device()
    {
        $location = factory(Location::class)->create();
        $device = factory(Device::class)->make()->toArray();
        $deviceCheckItems = factory(DeviceCheckItem::class, 3)->make()->toArray();

        $testResponse = $this->json('post', route('api.devices.store'), array_merge($device, [
            'check_items' => $deviceCheckItems,
            'location_id' => $location->id
        ]));

        $testResponse->assertJsonStructure([
            'message',
            'data' => [
                'id',
                'name',
                'sn',
                'location' => [
                    'name',
                    'manager_name',
                    'manager_phone',
                ],
                'type',
                'model',
                'expired_at',
                'desc',
                'check_items' => [
                    '*' => [
                        'id',
                        'name',
//                        'desc'
                    ]
                ],
            ]
        ])->assertSuccessful();

        $this->assertDatabaseHas((new Device())->getTable(), $device);
    }

    public function test_get_devices()
    {
        $location = factory(Location::class)->create();
        factory(Device::class, 3)->create([
            'location_id' => $location->id
        ]);

        $testResponse = $this->json('get', route('api.devices.index'));

        $testResponse->assertJsonStructure([
            'data' => [
                '*' => [
                    'id',
                    'name',
                    'sn',
                    'location' => [
                        'name',
                        'manager_name',
                        'manager_phone',
                    ],
                    'type',
                    'model',
                    'expired_at',
                    'desc',
                    'check_items' => [
                        '*' => [
                            'id',
                            'name',
//                            'desc'
                        ]
                    ],
                    'maintain_logs' => [
                        '*' => [
                            'id',
                            'result',
                            'abnormal_desc',
                            'logger_name',
                            'logger_phone',
                            'logger_position',
                        ]
                    ]
                ]
            ]
        ])->assertSuccessful();
    }

    public function test_destroy_device()
    {
        $location = factory(Location::class)->create();
        $device = factory(Device::class)->create([
            'location_id' => $location->id
        ]);

        $testResponse = $this->json('delete', route('api.devices.destroy', $device));

        $testResponse->assertJson([
            'message' => '删除成功'
        ])->assertSuccessful();

        $this->assertSoftDeleted((new Device())->getTable(), [
            'id' => $device->id
        ]);
    }
}
