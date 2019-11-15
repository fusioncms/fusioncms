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

$factory->define(App\Models\Form::class, function (Faker $faker) {
    $name = $faker->words(2, true);

    return [
        'name'        => $name,
        'handle'      => Str::slug($name, '_'),
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
