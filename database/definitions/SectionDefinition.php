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

$factory->define(App\Models\Section::class, function (Faker $faker) {
    $name = $faker->word();

    return [
        'name'             => $name,
        'handle'           => str_handle($name),
        'description'      => $faker->sentence,
        'placement'        => $faker->randomElement(['body', 'sidebar']),
        'order'            => 99,
        'fieldset_id'      => factory(App\Models\Fieldset::class),
    ];
});
