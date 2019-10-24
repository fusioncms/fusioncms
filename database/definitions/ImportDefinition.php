<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


use App\Models\Import;
use Faker\Generator as Faker;

$factory->define(Import::class, function (Faker $faker) {
	$name = $faker->word();

	return [
		'name'     => $name,
		'handle'   => str_handle($name),
		'module'   => $faker->randomElement(['users','taxonomy','matrix']),
		'location' => $faker->url,
		'strategy' => $faker->randomElements(
			['create', 'update', 'disable', 'delete'],
			$faker->numberBetween(1, 4)
		),
		'headings' => $faker->words($faker->numberBetween(8, 12)),
		'backup'   => $faker->boolean(50),
	];
});

$factory->afterCreatingState(Import::class, 'mapped', function ($import, $faker) {
    $mappings = [];

    foreach($import->heading as $heading) {
    	$mappings[$heading] = $faker->word;
    }
    
    return $mappings;
});