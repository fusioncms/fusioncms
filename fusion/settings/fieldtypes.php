<?php


return [
	'name'        => 'Fieldtypes',
    'group'       => 'General',
    'icon'        => 'box-open',
    'description' => 'Manage fieldtypes and where they can be utilized.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Structures',
                'handle'      => 'structures',
                'type'        => 'json',
                'required'    => false,
                'gui'         => false,
            ],
            [
                'name'        => 'Structures',
                'handle'      => 'structures_component',
                'type'        => 'component',
                'component'   => 'settings-fieldtypes',
                'required'    => false,
            ],
        ],
    ],
];