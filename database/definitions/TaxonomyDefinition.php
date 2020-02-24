<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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

$factory->define(App\Models\Taxonomy::class, function (Faker $faker) {
    $name = $faker->words(2, true);

    return [
        'name'             => $name,
        'slug'             => Str::slug($name, '-'),
        'handle'           => Str::slug($name, '_'),
        'description'      => $faker->sentence,
        'sidebar'          => $faker->boolean(50),
        'icon'             => $faker->randomElement(['tag', 'swatchbook', 'map-marker-alt', 'feather-alt']),
        'route'            => 'taxonomy/{slug}',
        'template'         => 'taxonomy.' . Str::slug($name, '_'),
    ];
});


$factory->afterCreatingState(App\Models\Taxonomy::class, 'terms', function ($taxonomy, $faker) {
    $terms = [];

    for ($i = 0; $i < 5; ++$i) {
        array_push($terms, [
            'name' => ($name = $faker->unique()->word),
            'slug' => Str::slug($name, '-'),
        ]);
    }

    $taxonomy->terms()->createMany($terms);
});