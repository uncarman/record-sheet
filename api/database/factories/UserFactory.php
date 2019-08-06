<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Illuminate\Support\Str;
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

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(\App\Models\Device::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'sn' => $faker->word,
        'type' => $faker->randomElement(\App\Models\Device::TYPES),
        'model' => $faker->word,
        'expired_at' => $faker->dateTime->format('Y-m-d H:i:s'),
        'desc' => $faker->paragraph,
        'image' => $faker->sentence,
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
        'result' => $faker->boolean,
        'abnormal_desc' => $faker->sentence,
//        'notes' => $faker->sentence,
        'logger_name' => $faker->name,
        'logger_phone' => $faker->phoneNumber,
        'logger_position' => $faker->word,
        'photos' => $faker->randomElements(),
    ];
});
