<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        if ($username == config('auth.basic.username') && $password == config('auth.basic.password')) {
            return response([
                'data' => [
                    'token' => base64_encode("{$username}:{$password}")
                ]
            ]);
        } else {
            return response([
                'message' => '密码错误'
            ], 400);
        }
    }
}
