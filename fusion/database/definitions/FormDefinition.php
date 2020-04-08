<?php

use Fusion\Models\Form;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Form::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->words(2, true)),
        'handle'      => Str::slug($name, '_'),
        'slug'        => Str::slug($name, '-'),
        'description' => $faker->sentence,

        'collect_email_addresses' => true,
        'collect_ip_addresses'    => true,
        'response_receipt'        => true,
        'message'                 => null,
        'redirect_on_submission'  => false,
        'redirect_url'            => null,
        'enable_recaptcha'        => false,
        'enable_honeypot'         => false,
        'send_to'                 => null,
        'reply_to'                => null,
        'form_template'           => null,
        'thankyou_template'       => null,
        'status'                  => true,
    ];
});