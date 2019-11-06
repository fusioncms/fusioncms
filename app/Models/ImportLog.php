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

use App\Models\Import;
use App\Database\Eloquent\Model;

class ImportLog extends Model
{
	/**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'import_id',
        'total_rows',
        'progress',
        'completed_at',
    ];

    /**
     * Belongs To relationship.
     * 
     * @return Builder
     */
    public function import()
    {
    	return $this->belongsTo(Import::class);
    }
}
