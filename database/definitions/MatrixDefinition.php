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

$factory->define(App\Models\Matrix::class, function (Faker $faker) {
    $name = $faker->words(2, true);

    return [
        'name'             => $name,
        'handle'           => Str::slug($name, '_'),
        'slug'             => Str::slug($name, '-'),
        'description'      => $faker->sentence,
        'type'             => $faker->randomElement(['page', 'collection']),
        'sidebar'          => $faker->boolean(50),
        'quicklink'        => $faker->boolean(50),
        'icon'             => $faker->randomElement(['pencil', 'airplane', 'book', 'brain']),
        'show_title_field' => true,
        'title_label'      => '',
        'title_format'     => '',
        'route'            => 'test/{slug}',
        'template'         => 'test.' . Str::slug($name),
        'revision_control' => $faker->boolean(50),
        'publishable'      => $faker->boolean(50),
        'status'           => $faker->boolean(50),
    ];
});
