<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(\App\Models\Device::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'sn' => $faker->word,
        'type' => $faker->randomElement(\App\Models\Device::TYPES),
        'model' => $faker->word,
        'expired_at' => $faker->dateTime->format('Y-m-d'),
        'desc' => $faker->paragraph,
        'image' => $faker->sentence,
        'status' => $faker->numberBetween(0, 1),
        'interval' => $faker->numberBetween(1, 10)
    ];
});

$factory->define(\App\Models\DeviceCheckItem::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
//        'desc' => $faker->sentence,
    ];
});

$factory->define(\App\Models\Location::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'manager_name' => $faker->word,
        'manager_phone' => $faker->phoneNumber,
    ];
});

$factory->define(\App\Models\MaintainLog::class, function (Faker $faker) {
    return [
        'result' => $faker->numberBetween(0, 1),
        'abnormal_desc' => $faker->sentence,
//        'notes' => $faker->sentence,
        'logger_name' => $faker->name,
        'logger_phone' => $faker->phoneNumber,
        'logger_position' => $faker->word,
        'photos' => $faker->randomElements(),
    ];
});
