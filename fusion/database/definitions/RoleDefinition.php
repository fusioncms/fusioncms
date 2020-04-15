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

$factory->define(Fusion\Models\Role::class, function (Faker $faker) {
    $name = $faker->word;

    return [
        'name'        => $name,
        'slug'        => str_handle($name),
        'description' => $faker->sentence,
        'special'     => 'all-access',
    ];
});
