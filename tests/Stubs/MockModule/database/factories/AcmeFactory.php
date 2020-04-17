<?php

use Faker\Generator as Faker;
use Modules\MockModule\Models\Acme;

$factory->define(Acme::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->unique()->word),
        'handle'       => str_handle($name),
        'description' => $faker->sentence,
        'status'      => true
    ];
});