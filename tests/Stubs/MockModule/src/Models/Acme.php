<?php

namespace Modules\MockModule\Models;

use Fusion\Concerns\HasExtension;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;

class Acme extends Model
{
    use CachesQueries, HasExtension;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mock_module_acme';

	/**
	 * The attributes that aren't mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'handle',
		'description',
		'status',
	];

	/**
	 * The attributes that should be casted to native types.
	 *
	 * @var array
	 */
	protected $casts = [
	    'status' => 'boolean'
	];
}
