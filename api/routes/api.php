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


Route::post('login', 'LoginController@login')->name('login');

Route::group(['middleware' => 'basic.auth'], function () {
    Route::get('home', 'HomeController@index')->name('home.index');

    Route::post('devices/batchUpdate', 'DevicesController@batchUpdate')->name('devices.update.batch');
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
