<?php

use Illuminate\Database\Seeder;

class MaintainLogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\MaintainLog::class, 10)->make()->each(function (\App\Models\MaintainLog $maintainLog) {
            $device = \App\Models\Device::inRandomOrder()->first();
            $maintainLog = \App\Models\MaintainLog::create(array_merge($maintainLog->toArray(), [
                'device_id' => $device->id
            ]));

            $device->check_items->each(function (\App\Models\DeviceCheckItem $item) use ($maintainLog) {
                $maintainLog->check_item_logs()->attach($item->id, [
                    'result' => rand(1, 0)
                ]);
            });
        });
    }
}
