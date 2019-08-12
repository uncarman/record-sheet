<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $statusOkCount = Device::statusOk()->count();
        $statusErrorCount = Device::statusError()->count();
        $needCheckCount = Device::needCheck()->count();
        $expireCount = Device::expire()->count();
        return response([
            'data' => [
                'status_ok_count' => $statusOkCount,
                'status_error_count' => $statusErrorCount,
                'need_check_count' => $needCheckCount,
                'expire_count' => $expireCount
            ]
        ]);
    }
}
