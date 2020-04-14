<?php

use Faker\Generator as Faker;

$factory->define(Fusion\Models\Extension::class, function (Faker $faker) {
    return [
        'name'   => ($name = $faker->word),
        'handle' => str_handle($name, '_'),
        'status' => true,
    ];
});
