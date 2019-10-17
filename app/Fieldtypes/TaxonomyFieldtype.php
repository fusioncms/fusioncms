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

class TaxonomyFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Taxonomy';

    /**
     * @var string
     */
    public $icon = 'sitemap';

    /**
     * @var string
     */
    public $description = 'Relate and organize under a taxonomy.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        // 
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];

    // The following three public properties are
    // required for setting up fieldtypes
    // that generate relationships.

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'App\Models\Taxonomies';
}
