<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Http\UploadedFile;

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

$factory->define(Fusion\Models\Directory::class, function (Faker $faker) {
    return [
        'name'      => ($name = $faker->unique()->word()),
        'slug'      => Str::slug($name),
        'parent_id' => 0,
    ];
});
