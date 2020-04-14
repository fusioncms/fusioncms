<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Extension::class, function (Faker $faker) {
    return [
        'name'   => ($name = $faker->word),
        'handle' => str_handle($name, '_'),
        'status' => true,
    ];
});
