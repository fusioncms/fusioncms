<?php

use Fusion\Models\Import;
use Faker\Generator as Faker;

$factory->define(Import::class, function (Faker $faker) {
	$name = $faker->word();

	return [
		'name'     => $name,
		'handle'   => str_handle($name),
		'module'   => $faker->randomElement(['users','taxonomy','matrix']),
		'group'    => 0,
		'source'   => $faker->url,
		'strategy' => $faker->randomElements(
			['create', 'update', 'delete'],
			$faker->numberBetween(1, 3)
		),
		'backup'   => false,//$faker->boolean(50),
	];
});

$factory->state(Import::class, 'users', function ($faker) {
    return [
        'module'   => 'users',
        'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values/dummyusers!1:11?key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
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