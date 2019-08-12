<?php

namespace App\Observers;

use App\Models\Device;
use Carbon\Carbon;

class DeviceObserver
{
    /**
     * Handle the device "created" event.
     *
     * @param \App\Models\Device $device
     * @return void
     */
    public function created(Device $device)
    {
        //
    }

    /**
     * Handle the device "updated" event.
     *
     * @param \App\Models\Device $device
     * @return void
     */
    public function updated(Device $device)
    {
        //
    }

    public function updating(Device $device)
    {
        if ($device->isDirty('interval') && $device->latest_check_date != null) {
            $device->next_check_date = Carbon::createFromFormat('Y-m-d', $device->latest_check_date)->addDays($device->interval)->format('Y-m-d');
        }
    }

    /**
     * Handle the device "deleted" event.
     *
     * @param \App\Models\Device $device
     * @return void
     */
    public function deleted(Device $device)
    {
        //
    }

    /**
     * Handle the device "restored" event.
     *
     * @param \App\Models\Device $device
     * @return void
     */
    public function restored(Device $device)
    {
        //
    }

    /**
     * Handle the device "force deleted" event.
     *
     * @param \App\Models\Device $device
     * @return void
     */
    public function forceDeleted(Device $device)
    {
        //
    }
}
