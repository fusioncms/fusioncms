<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


use App\Models\Import;
use App\Contracts\Factory;

class ImportFactory implements Factory
{

	/**
	 * Factory state(s) used when creating records.
	 *
	 * @var array
	 */
	protected $states = [];

	/**
	 * Number of records to generate.
	 *
	 * @var integer
	 */
	protected $count = 1;

	/**
	 * Create 
	 * @return [type] [description]
	 */
	public function create()
	{
		if (count($this->state) > 0) {
			return factory(Import::class, $this->count)
				->states(implode(',', $this->states))
				->create();
		}

		return factory(Import::class, $this->count)->create();
	}

	public function withCount(int $count)
	{
		$this->count = $count;

		return $this;
	}

	public function withStates(array $states)
	{
		$this->states = $states;

		return $this;
	}
}