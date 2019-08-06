<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    Route::apiResource('devices', 'DevicesController', [
        'only' => ['index', 'store', 'show', 'update', 'destroy']
    ]);

    Route::apiResource('locations', 'LocationsController', [
        'only' => ['index', 'store', 'show', 'update', 'destroy']
    ]);

    Route::apiResource('maintain_logs', 'MaintainLogsController', [
        'only' => ['index', 'store', 'show', 'update', 'destroy']
    ]);
});
