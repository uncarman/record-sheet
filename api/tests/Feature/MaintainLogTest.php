<?php

namespace Tests\Feature;

use App\Models\Device;
use App\Models\Location;
use App\Models\MaintainLog;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MaintainLogTest extends TestCase
{
    public function test_create_maintain_log()
    {
        $location = factory(Location::class)->create();
        $device = factory(Device::class)->create([
            'location_id' => $location->id
        ]);
        $maintain_log = factory(MaintainLog::class)->make([
            'device_id' => $device->id
        ])->toArray();

        $testResponse = $this->json('post', route('api.maintain_logs.store'), array_merge($maintain_log, [
            'device_id' => $device->id
        ]));

        $testResponse->assertJsonStructure([
            'message',
            'data' => [
                'device' => [
                    'id',
                    'name'
                ],
                'result',
                'abnormal_desc',
                'logger_name',
                'logger_phone',
                'logger_position'
            ]
        ])->assertSuccessful();

//        $this->assertDatabaseHas((new MaintainLog())->getTable(), $maintain_log);
    }
}
