<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeviceCheckItemLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('device_check_item_log', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('maintain_log_id')->index();
            $table->unsignedBigInteger('device_check_item_id')->index();
            $table->boolean('result');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('device_check_item_log');
    }
}
