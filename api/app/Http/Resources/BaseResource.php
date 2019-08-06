<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BaseResource extends JsonResource
{
    public function with($request)
    {
        return [
            'code' => 10000
        ];
    }
}
