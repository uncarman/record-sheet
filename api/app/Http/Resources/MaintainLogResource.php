<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaintainLogResource extends BaseResource
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
            'did' => $this->device ? $this->device->id : null,
            'pid' => $this->device ? $this->device->location->id : null,
            'status' => $this->result_text,
            'result' => $this->result,
            'abnormal_desc' => $this->abnormal_desc,
            'notes' => $this->abnormal_desc,
            'operator' => $this->logger_name,
            'logger_name' => $this->logger_name,
            'logger_phone' => $this->logger_phone,
            'operatorPhone' => $this->logger_phone,
            'logger_position' => $this->logger_position,
            'device' => new DeviceResource($this->whenLoaded('device')),
            'extr' => DeviceCheckItemResource::collection($this->whenLoaded('check_item_logs')),
            'check_item_logs' => DeviceCheckItemResource::collection($this->whenLoaded('check_item_logs')),
            'point' => new LocationResource($this->whenLoaded('device.location')),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updateTime' => $this->updated_at->format('Y-m-d H:i:s'),
            'photos' => $this->photos
        ];
    }
}
