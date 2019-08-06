<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
    use SoftDeletes, SoftCascadeTrait;

    protected $softCascade = ['devices'];

    protected $guarded = [];

    public function devices()
    {
        return $this->hasMany('App\Models\Device');
    }
}
