<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeviceCheckItem extends Model
{
    protected $guarded = [];

    public function device()
    {
        return $this->belongsTo('App\Models\Device');
    }
}
