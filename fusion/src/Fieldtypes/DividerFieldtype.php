<?php

namespace Fusion\Fieldtypes;

class DividerFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Divider';

    /**
     * @var string
     */
    public $icon = 'window-minimize';

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
