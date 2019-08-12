<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class DeviceCheckItemResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
//            'desc' => $this->desc,
            'status' => $this->whenPivotLoaded('device_check_item_log', function () {
                return $this->pivot->result ? '正常' : '异常';
            }),
            'result' => $this->whenPivotLoaded('device_check_item_log', function () {
                return $this->pivot->result;
            })
        ];
    }
}
