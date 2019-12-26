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

$factory->define(App\Models\User::class, function (Faker $faker) {
    static $password;

    return [
        'name'              => $faker->name,
        'email'             => $faker->unique()->safeEmail,
        'password'          => $password ?: $password = bcrypt('secret'),
        'status'            => true,
        'email_token'       => Str::random(10),
        'remember_token'    => Str::random(10),
        'email_verified_at' => now(),
    ];
});

// $factory->define(App\Models\Role::class, function (Faker $faker) {
//     $name = $faker->word;

//     return [
//         'name'        => $name,
//         'slug'        => str_handle($name),
//         'description' => $faker->sentence,
//         'special'     => 'all-access',
//     ];
// });
