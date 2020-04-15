<?php

namespace Fusion\Fieldtypes;

class FileFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'File';

    /**
     * @var string
     */
    public $icon = 'file-alt';

    /**
     * @var string
     */
    public $description = 'FIELDTYPE IN DEVELOPMENT';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
