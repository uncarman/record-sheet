<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Device extends Model
{
    use SoftDeletes, SoftCascadeTrait;

    protected $softCascade = ['maintain_logs'];

    protected $guarded = [];

    const TYPES = [
        '电梯', '灭火器', '消防栓', '故障报修'
    ];

    public function check_items()
    {
        return $this->hasMany('App\Models\DeviceCheckItem');
    }

    public function maintain_logs()
    {
        return $this->hasMany('App\Models\MaintainLog');
    }

    public function location()
    {
        return $this->belongsTo('App\Models\Location');
    }
}
