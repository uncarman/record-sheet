<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Device extends Model
{
    use SoftDeletes, SoftCascadeTrait;

    protected $softCascade = ['maintain_logs'];

    protected $guarded = [];

    const TYPES = [
        '电梯', '灭火器', '消防栓', '故障报修'
    ];

    const STATUS_OK = 1;
    const STATUS_ERROR = 0;

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

    public function maintain_log()
    {
        return $this->hasOne('App\Models\MaintainLog');
    }

    public function scopeStatusOk($query)
    {
        return $query->where('status', self::STATUS_OK);
    }

    public function scopeStatusError($query)
    {
        return $query->where('status', self::STATUS_ERROR);
    }

    public function scopeNeedCheck($query)
    {
        return $query->where('next_check_date', '<=', Carbon::now());
    }

    public function scopeExpire($query)
    {
        return $query->whereRaw(DB::raw("expired_at <= DATE_ADD(NOW(), INTERVAL 7 DAY)"));
    }
}
