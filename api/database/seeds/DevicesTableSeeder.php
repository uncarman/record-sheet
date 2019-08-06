<?php

use Illuminate\Database\Seeder;

class DevicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Location::class, 10)->create();

        factory(\App\Models\Device::class, 10)->make()->each(function (\App\Models\Device $device) {
            $location = \App\Models\Location::inRandomOrder()->first();

            $device = \App\Models\Device::create(array_merge($device->toArray(), [
                'location_id' => $location->id
            ]));
            $device->check_items()->createMany(factory(\App\Models\DeviceCheckItem::class, 3)->make()->toArray());
        });
    }
}
