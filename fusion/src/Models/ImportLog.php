<?php

namespace Fusion\Models;

use Fusion\Models\Import;
use Fusion\Database\Eloquent\Model;

class ImportLog extends Model
{
	/**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'import_id',
        'next_row',
        'total_rows',
        'processed',
        'progress',
        'log_file',
        'status',
        'completed_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'processed' => 'collection'
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
