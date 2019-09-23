<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Fieldtypes;

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
