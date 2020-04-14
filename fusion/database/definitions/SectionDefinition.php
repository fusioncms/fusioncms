<?php

use Fusion\Models\Section;
use Faker\Generator as Faker;

$factory->define(Section::class, function (Faker $faker) {
    return [
        'name'             => ($name = $faker->unique()->word),
        'handle'           => str_handle($name),
        'description'      => $faker->sentence,
        'placement'        => $faker->randomElement(['body', 'sidebar']),
        'order'            => 99,
        'fieldset_id'      => factory(Fusion\Models\Fieldset::class),
    ];
});