<?php

namespace Fusion\Database\Eloquent\Relations;

use Illuminate\Support\Str;
use Fusion\Models\Extension;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HasOneExtension extends HasOne
{
	/**
	 * Extension Manager
	 * 
	 * @var \Fusion\Models\Extension
	 */
	protected $extension;

	/**
	 * Constructor.
	 *
	 * @param \Illuminate\Database\Eloquent\Model
	 */
	public function __construct(Model $parent)
	{
		$this->extension = Extension::firstOrCreate([
			'name'   => Str::studly($parent->getTable()),
			'handle' => $parent->getTable(),
		]);

		parent::__construct($this->extension->getBuilder()->query(), $parent, 'related_id', 'id');
	}

    /**
     * Set the base constraints on the relation query.
     *
     * @return void
     */
    public function addConstraints()
    {
        if (static::$constraints && $this->parent->exists) {
        	$this->query->firstOrCreate([
				'extension_id' => $this->extension->id,
				'related_id'   => $this->getParentKey(),
			]);
        }
    }
}