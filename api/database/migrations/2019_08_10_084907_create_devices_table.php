<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('location_id')->index();
            $table->string('name');
            $table->longText('image');
            $table->string('sn');
            $table->string('type')->nullable();
            $table->string('model')->nullable();
            $table->date('expired_at')->nullable();
            $table->text("desc")->nullable();
            $table->boolean('status')->nullable();
            $table->string('interval')->nullable();
            $table->date('next_check_date')->nullable();
            $table->date('latest_check_date')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('devices');
    }
}
