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

class ButtonFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Button';

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
