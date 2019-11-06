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
		'group'    => 0,
		'location' => $faker->url,
		'strategy' => $faker->randomElements(
			['create', 'update', 'disable', 'delete'],
			$faker->numberBetween(1, 4)
		),
		'backup'   => false,//$faker->boolean(50),
	];
});

$factory->state(Import::class, 'users', function ($faker) {
    return [
        'module'   => 'users',
        'location' => base_path('tests/Stubs/Importer/Users.csv'),
        'preview'  => [
            ['id', 'name', 'email', 'password', 'role', 'status'],
            [1, 'Janet Doe', 'admin@example.com', '', 'admin', 1]
        ],
        'mappings' => [
        	'id' => [
        		'name'     => 'ID',
        		'handle'   => 'id',
        		'cast'     => 'integer',
        		'column'   => 'id',
        		'required' => true,
        		'default'  => null
        	],
        	'name' => [
        		'name'     => 'Name',
        		'handle'   => 'name',
        		'cast'     => 'string',
        		'column'   => 'name',
        		'required' => true,
        		'default'  => null
        	],
        	'email' => [
        		'name'     => 'Email',
        		'handle'   => 'email',
        		'cast'     => 'string',
        		'column'   => 'email',
        		'required' => true,
        		'default'  => null
        	],
            'password' => [
                'name'     => 'Password',
                'handle'   => 'password',
                'cast'     => 'string',
                'column'   => 'password',
                'required' => false,
                'default'  => null
            ],
        	'role' => [
        		'name'     => 'Role',
        		'handle'   => 'role',
        		'cast'     => 'string',
        		'column'   => 'role',
        		'required' => true,
        		'default'  => null
        	],
        	'status' => [
        		'name'     => 'Status',
        		'handle'   => 'status',
        		'cast'     => 'boolean',
        		'column'   => 'status',
        		'required' => true,
        		'default'  => null
        	]
        ]
    ];
});