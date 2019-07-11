<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Models;

use App\Concerns\CachesQueries;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use CachesQueries;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['fieldset_id', 'name', 'handle', 'description', 'placement', 'order'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'sections';

    /**
     * Get the fields for the given section.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fields()
    {
        return $this->hasMany(Field::class)->orderBy('order');
    }

    /**
     * A section belongs to a fieldset.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function fieldset()
    {
        return $this->belongsTo(Fieldset::class);
    }
}
