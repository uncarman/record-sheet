<?php

namespace App\Http\Requests;

use App\Models\Device;
use Illuminate\Foundation\Http\FormRequest;

class MaintainLogRequest extends FormRequest
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
        $check_items = null;
        switch ($this->method()) {
            case 'POST':
                return [
                    'device_id' => ['required', 'exists:devices,id'],
                    'result' => ['required', 'boolean'],
                    'abnormal_desc' => ['nullable'],
                    'logger_name' => ['required'],
                    'logger_phone' => ['required'],
                    'logger_position' => ['required'],
                    'check_item_logs' => ['array'],
                    'check_item_logs .*.id' => ['required', 'exists:device_check_items,id'],
                    'check_item_logs .*.result' => ['required', 'boolean'],
                    'photos' => ['nullable']
                ];
                break;
            case 'PUT':
                return [
                    'result' => ['required', 'boolean'],
                    'abnormal_desc' => ['nullable'],
                    'logger_name' => ['required'],
                    'logger_phone' => ['required'],
                    'logger_position' => ['required'],
                    'check_item_logs' => ['array'],
                    'check_item_logs .*.id' => ['required', 'exists:device_check_items,id'],
                    'check_item_logs .*.result' => ['required', 'boolean'],
                    'photos' => ['nullable']
                ];
                break;
            default:
                return [];
        }
    }
}
