<?php

namespace App\Services\Relations;

use App\Models\Extension;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HasOneExtension extends HasOne
{
	/**
	 * Constructor.
	 * 
	 * @param \Illuminate\Database\Eloquent\Model
	 */
	public function __construct(Model $parent)
    {
    	$extender = Extension::firstOrCreate([
            'name'   => Str::studly($parent->getTable()),
            'handle' => $parent->getTable(),
        ]);

        $extension = $extender->getBuilder()->firstOrCreate([
			'extension_id' => $extender->id,
			'related_id'   => $parent->id,
		]);

        parent::__construct($extension->query(), $parent, 'related_id', 'id');
    }
}