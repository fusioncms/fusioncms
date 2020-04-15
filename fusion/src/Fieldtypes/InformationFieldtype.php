<?php

namespace Fusion\Fieldtypes;

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
