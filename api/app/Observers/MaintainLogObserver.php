<?php

namespace App\Observers;

use App\Models\MaintainLog;
use Carbon\Carbon;

class MaintainLogObserver
{
    /**
     * Handle the maintain log "created" event.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return void
     */
    public function created(MaintainLog $maintainLog)
    {
        $maintainLog->device->update([
            'status' => $maintainLog->result,
            'next_check_date' => Carbon::now()->addDays($maintainLog->device->interval)->format('Y-m-d'),
            'latest_check_date' => Carbon::now()->format('Y-m-d')
        ]);
    }

    /**
     * Handle the maintain log "updated" event.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return void
     */
    public function updated(MaintainLog $maintainLog)
    {
        $log = $maintainLog->device->maintain_logs()->latest()->first();
        if ($log->id == $maintainLog->id) {
            $maintainLog->device->update([
                'status' => $maintainLog->result,
                'next_check_date' => Carbon::createFromFormat('Y-m-d H:i:s', $maintainLog->updated_at)->addDays($maintainLog->device->interval)->format('Y-m-d'),
                'latest_check_date' => Carbon::createFromFormat('Y-m-d H:i:s', $maintainLog->updated_at)->format('Y-m-d')
            ]);
        }
    }

    /**
     * Handle the maintain log "deleted" event.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return void
     */
    public function deleted(MaintainLog $maintainLog)
    {
        $log = $maintainLog->device->maintain_logs()->latest()->first();
        if ($log) {
            $data = [
                'status' => $log->result,
                'next_check_date' => Carbon::createFromFormat('Y-m-d H:i:s', $log->updated_at)->addDays($maintainLog->device->interval)->format('Y-m-d'),
                'latest_check_date' => Carbon::createFromFormat('Y-m-d H:i:s', $log->updated_at)->format('Y-m-d'),
            ];
        } else {
            $data = [
                'status' => null,
                'next_check_date' => null
            ];
        }

        $maintainLog->device->update($data);
    }

    /**
     * Handle the maintain log "restored" event.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return void
     */
    public function restored(MaintainLog $maintainLog)
    {
        //
    }

    /**
     * Handle the maintain log "force deleted" event.
     *
     * @param \App\Models\MaintainLog $maintainLog
     * @return void
     */
    public function forceDeleted(MaintainLog $maintainLog)
    {
        //
    }
}
