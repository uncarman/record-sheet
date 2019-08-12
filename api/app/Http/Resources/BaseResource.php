<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class BaseResource extends Resource
{
    public function with($request)
    {
        return [
            'code' => 10000
        ];
    }
}
