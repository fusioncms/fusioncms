<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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
        'handle'           => str_handle($name),
        'description'      => $faker->sentence,
        'type'             => $faker->randomElement(['page', 'collection']),
        'sidebar'          => $faker->boolean(50),
        'quicklink'        => $faker->boolean(50),
        'icon'             => $faker->randomElement(['pencil', 'airplane', 'book', 'brain']),
        'route'            => 'test/{slug}',
        'template'         => 'test.' . str_handle($name),
        'revision_control' => $faker->boolean(50),
        'categorizable'    => $faker->boolean(50),
        'creditable'       => $faker->boolean(50),
        'publishable'      => $faker->boolean(50),
        'seoable'          => $faker->boolean(50),
        'status'           => $faker->boolean(50),
    ];
});
