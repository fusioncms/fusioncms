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

$factory->define(App\Models\Field::class, function (Faker $faker) {
    $reservedWords = ['id', 'name', 'handle', 'help', 'required', 'type', 'settings', 'order', 'section_id'];
    $name = $faker->unique()->word();

    while (in_array($name, $reservedWords)) {
        $name = $faker->unique()->word();
    }

    return [
        'name'       => $name,
        'handle'     => str_handle($name),
        'help'       => $faker->sentence,
        'required'   => false,
        'type'       => 'input',
        'settings'    => [],
        'order'      => 99,
        'section_id' => 999,
    ];
});
