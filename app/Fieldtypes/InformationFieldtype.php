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

class InformationFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Information';

    /**
     * @var string
     */
    public $icon = 'info-circle';

    /**
     * @var string
     */
    public $description = 'Add content-rich information to your forms to give users additional context.';

    /**
     * @var string
     */
    public $cast = null;

    /**
     * @var array
     */
    public $column = null;
}
