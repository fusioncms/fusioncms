<?php

namespace App\Fieldtypes\Relationships;

abstract class Relationship
{
    /**
     * Create the underlying relationship structure.
     * 
     * @param  \App\Models\Field  $field
     * @return void
     */
    abstract public function create($field);

    /**
     * Update the underlying relationship structure.
     * 
     * @param  Array  $old
     * @param  Array  $new
     * @return void
     */
    abstract public function update($old, $new);

    /**
     * Delete the underlying relationship structure.
     * 
     * @param  \App\Models\Field  $field
     * @return void
     */
    abstract public function delete($field);
}