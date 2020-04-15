<?php

namespace Fusion\Fieldtypes;

class LinkFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Link';

    /**
     * @var string
     */
    public $icon = 'link';

    /**
     * @var string
     */
    public $description = 'A group of fields to add a link or button, including the URL, display text, and target.';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
