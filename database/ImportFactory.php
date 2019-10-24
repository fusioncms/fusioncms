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
	protected $times = 1;

	/**
	 * Create 
	 * @return [type] [description]
	 */
	public function create()
	{
		if (count($this->states) > 0) {
			$imports = factory(Import::class, $this->times)
				->states(implode(',', $this->states))
				->create();
		} else {
			$imports = factory(Import::class, $this->times)->create();
		}

		if ($this->times === 1) {
            return $imports->first();
        }

		return $imports;
	}

	public function withStates(array $states)
	{
		$this->states = $states;

		return $this;
	}

	/**
     * Create N number of instances.
     * 
     * @param  integer  $times
     * @return \SectionFactory
     */
    public function times($times)
    {
        $this->times = $times;

        return $this;
    }
}