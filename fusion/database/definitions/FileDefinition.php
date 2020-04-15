<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/**
 * Default definition
 */
$factory->define(Fusion\Models\File::class, function (Faker $faker) {
    return [
        'directory_id' => 0,
        'uuid'         => ($uuid = unique_id()),
        'name'         => ($name = $this->faker->word),
        'slug'         => ($slug = Str::slug("{$uuid}-{$name}")),
        'description'  => $faker->sentence(),
        'extension'    => ($extn = 'png'),
        'original'     => Str::slug($name) . ".{$extn}",
        'mimetype'     => 'image/png',
        'location'     => "files/{$slug}.{$extn}",
        'width'        => $faker->randomNumber(2),
        'height'       => $faker->randomNumber(2),
        'bytes'        => $faker->randomNumber(3),
    ];
});

/**
 * Image definition
 */
$factory->state(Fusion\Models\File::class, 'image', function ($faker) {
    return [
        // See above..
    ];
});

/**
 * Audio definition
 */
$factory->state(Fusion\Models\File::class, 'audio', function ($faker) {
    return [
        'uuid'         => ($uuid = unique_id()),
        'name'         => ($name = $this->faker->word),
        'slug'         => ($slug = Str::slug("{$uuid}-{$name}")),
        'description'  => $faker->sentence(),
        'extension'    => ($extn = 'ogg'),
        'original'     => Str::slug($name) . ".{$extn}",
        'mimetype'     => 'audio/ogg',
        'location'     => "files/{$slug}.{$extn}",
        'width'        => null,
        'height'       => null,
    ];
});

/**
 * Video definition
 */
$factory->state(Fusion\Models\File::class, 'video', function ($faker) {
    return [
        'uuid'         => ($uuid = unique_id()),
        'name'         => ($name = $this->faker->word),
        'slug'         => ($slug = Str::slug("{$uuid}-{$name}")),
        'description'  => $faker->sentence(),
        'extension'    => ($extn = 'webm'),
        'original'     => Str::slug($name) . ".{$extn}",
        'mimetype'     => 'video/webm',
        'location'     => "files/{$slug}.{$extn}",
        'width'        => null,
        'height'       => null,
    ];
});

/**
 * Document definition
 */
$factory->state(Fusion\Models\File::class, 'document', function ($faker) {
    return [
        'uuid'         => ($uuid = unique_id()),
        'name'         => ($name = $this->faker->word),
        'slug'         => ($slug = Str::slug("{$uuid}-{$name}")),
        'description'  => $faker->sentence(),
        'extension'    => ($extn = 'txt'),
        'original'     => Str::slug($name) . ".{$extn}",
        'mimetype'     => 'text/plain',
        'location'     => "files/{$slug}.{$extn}",
        'width'        => null,
        'height'       => null,
    ];
});

/**
 * Post create image - upload image
 */
$factory->afterCreatingState(Fusion\Models\File::class, 'image', function ($file, $faker) {
    $name = "{$file->slug}.{$file->extension}";
    $file = UploadedFile::fake()->image($name);

    Storage::fake('public')->putFileAs('files', $file, $name);

});

/**
 * Post create document - upload file
 */
$factory->afterCreatingState(Fusion\Models\File::class, 'document', function ($file, $faker) {
    $name = "{$file->slug}.{$file->extension}";
    $file = UploadedFile::fake()->createWithContent($name, $faker->paragraphs(3, true));

    Storage::fake('public')->putFileAs('files', $file, $name);
});