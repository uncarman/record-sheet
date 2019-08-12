<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeviceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
            case 'PUT':
                return [
                    'name' => ['required'],
                    'sn' => ['required'],
                    'location_id' => ['required', 'exists:locations,id'],
                    'type' => ['nullable'],
                    'model' => ['nullable'],
                    'expired_at' => ['required'],
                    'desc' => ['nullable'],
                    'check_items' => ['nullable'],
                    'check_items.*.name' => ['nullable'],
                    'interval' => ['required']
//                    'check_items.*.desc' => ['nullable'],
                ];
                break;
            default:
                return [];
        }
    }
}
