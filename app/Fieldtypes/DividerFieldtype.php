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

class DividerFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Divider';

    /**
     * @var string
     */
    public $icon = 'horizontal-rule';

    /**
     * @var string
     */
    public $description = 'Visually divide fields within your forms.';

    /**
     * @var string
     */
    public $cast = null;

    /**
     * @var array
     */
    public $column = null;
}
