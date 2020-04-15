<?php

namespace Fusion\Fieldtypes;

class MarkdownFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Markdown';

    /**
     * @var string
     */
    public $icon = 'hashtag';

    /**
     * @var string
     */
    public $description = 'A markdown editor with preview display';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
