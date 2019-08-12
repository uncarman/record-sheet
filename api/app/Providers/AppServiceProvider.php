<?php

namespace App\Providers;

use App\Models\Device;
use App\Models\MaintainLog;
use App\Observers\DeviceObserver;
use App\Observers\MaintainLogObserver;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        MaintainLog::observe(MaintainLogObserver::class);
        Device::observe(DeviceObserver::class);
    }
}
