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
use Illuminate\Http\UploadedFile;

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

$factory->define(App\Models\File::class, function (Faker $faker) {
    // $file     = UploadedFile::fake()->image($filename.'.jpg');
    $filename  = $faker->word();
    $extension = 'png';
    $uuid      = unique_id();
    $slug      = str_slug($uuid.' '.$filename);
    $location  = 'files/'.$slug.'.'.$extension;
    $mimetype  = 'image/png';
    
    return [
        'directory_id' => null,
        'name'         => $filename,
        'slug'         => $slug,
        'uuid'         => $uuid,
        'location'     => $location,
        'original'     => $filename.'.'.$extension,
        'extension'    => $extension,
        'mimetype'     => $mimetype,
        'bytes'        => 100,
    ];
});
