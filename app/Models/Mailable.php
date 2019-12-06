<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mailable extends Model
{
	/**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
    	'name',
    	'handle',
    	'markdown',
    	'status'
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
