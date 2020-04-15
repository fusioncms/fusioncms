<?php

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

$factory->define(Fusion\Models\Menu::class, function (Faker $faker) {
    $name = $faker->words(2, true);

    return [
        'name'        => $name,
        'handle'      => Str::slug($name, '_'),
        'description' => $faker->sentence,
    ];
});
