<?php

namespace App\Http\Resources;

use App\Models\Location;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class DeviceResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'sn' => $this->sn,
            'admin' => $this->location->manager_name,
            'adminPhone' => $this->location->manager_phone,
            'location' => new LocationResource($this->whenLoaded('location')),
            'type' => $this->type,
            'model' => $this->model,
            'expired_at' => Carbon::createFromFormat('Y-m-d H:i:s', $this->expired_at)->format('Y-m-d'),
            'img' => $this->image_url,
            'image_url' => $this->image_url,
            'notes' => $this->desc,
            'desc' => $this->desc,
            'extr' => DeviceCheckItemResource::collection($this->whenLoaded('check_items')),
            'check_items' => DeviceCheckItemResource::collection($this->whenLoaded('check_items')),
            'records' => MaintainLogResource::collection($this->whenLoaded('maintain_logs')),
            'maintain_logs' => MaintainLogResource::collection($this->whenLoaded('maintain_logs')),
            'point' => new LocationResource($this->whenLoaded('location')),
            'image' => $this->image
        ];
    }
}
