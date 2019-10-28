<?php

namespace App\Fieldtypes\Relationships;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MorphToMany extends Relationship
{
    /**
     * Create the underlying relationship structure.
     * 
     * @param  Field  $field
     * @return void
     */
    public function create($field)
    {
        $tableName = Str::plural(Str::addAbleSuffix($field->handle));

        if (! Schema::hasTable($tableName)) {
            Schema::create($tableName, function($table) use ($field) {
                $table->integer($field->handle.'_id')->unsigned();
                $table->morphs(Str::addAbleSuffix($field->handle));
            });
        }
    }

    /**
     * Update the underlying relationship structure.
     * 
     * @param  Array  $old
     * @param  Array  $new
     * @return void
     */
    public function update($old, $new)
    {
        $oldTableName = Str::plural(Str::addAbleSuffix($old['handle']));
        $newTableName = Str::plural(Str::addAbleSuffix($new['handle']));

        // Because we utilize an in-memory SQLite database for testing,
        // we actually can't lump multiple table modifications in one
        // operation like we can with MySQL. For this reason, we've
        // separated out each modification we need to perform into its
        // own operation. The following is a link to a reported issue
        // against Laravel that outlines this dilemma.
        //
        // https://github.com/laravel/framework/issues/2979
        
        if (! Schema::hasTable($newTableName)) {
            Schema::rename($oldTableName, $newTableName);

            Schema::table($newTableName, function($table) use ($old, $new) {
                $table->renameColumn($old['handle'].'_id', $new['handle'].'_id');
            });

            Schema::table($newTableName, function($table) use ($old, $new) {
                $table->renameColumn(Str::addAbleSuffix($old['handle']).'_id', Str::addAbleSuffix($new['handle']).'_id');
            });

            Schema::table($newTableName, function($table) use ($old, $new) {
                $table->renameColumn(Str::addAbleSuffix($old['handle']).'_type', Str::addAbleSuffix($new['handle']).'_type');
            });
        }
    }

    /**
     * Delete the underlying relationship structure.
     * 
     * @param  Field  $field
     * @return void
     */
    public function delete($field)
    {
        $tableName = Str::plural(Str::addAbleSuffix($field->handle));

        Schema::dropIfExists($tableName);
    }
}