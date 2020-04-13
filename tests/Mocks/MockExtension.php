<?php

namespace Tests\Mocks;

use App\Concerns\HasExtension;
use App\Database\Eloquent\Model;

class MockExtension extends Model
{
	use HasExtension;

	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mock_extension';

    /**
	 * The attributes that aren't mass assignable.
	 *
	 * @var array
	 */
    protected $fillable = [ 'id', 'name', 'handle', 'description', 'status' ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [ 'status' => 'boolean' ];
}