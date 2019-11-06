<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Observers;

use App\Models\Taxonomy;
use App\Database\Migration;
use App\Database\Schema\Blueprint;

class TaxonomyObserver
{
    /**
     * @var \App\Database\Migration
     */
    protected $migration;

    /**
     * Create a new TaxonomyObserver instance.
     *
     * @param  \App\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the taxonomy "created" event.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function created(Taxonomy $taxonomy)
    {
        $this->migration->schema->create($taxonomy->table, function (Blueprint $table) use ($taxonomy) {
            $table->increments('id');
            $table->integer('taxonomy_id')->unsigned();
            $table->unsignedInteger('parent_id')->nullable();

            $table->string('name');
            $table->string('slug')->nullable();

            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        $this->migration->schema->create($taxonomy->pivot_table, function (Blueprint $table) use ($taxonomy) {
            $table->integer($taxonomy->handle.'_id')->unsigned();
            $table->morphs('pivot');
        });
    }

    /**
     * Handle the taxonomy "updating" event.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function updating(Taxonomy $taxonomy)
    {
        // Fetch our "old" taxonomy instance
        $old = Taxonomy::find($taxonomy->id);

        // Rename the tables if changed
        if ($old->table !== $taxonomy->table) {
            $this->migration->schema->rename($old->table, $taxonomy->table);
            $this->migration->schema->rename($old->pivot_table, $taxonomy->pivot_table);

            $this->migration->schema->table($taxonomy->pivot_table, function (Blueprint $table) use ($old, $taxonomy) {
                $table->renameColumn($old->handle.'_id', $taxonomy->handle.'_id');
            });
        }
    }

    /**
     * Handle the taxonomy "deleting" event.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function deleting(Taxonomy $taxonomy)
    {
        $taxonomy->detachFieldset();
    }

    /**
     * Handle the taxonomy "deleted" event.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function deleted(Taxonomy $taxonomy)
    {
        $this->migration->schema->dropIfExists($taxonomy->table);
        $this->migration->schema->dropIfExists($taxonomy->pivot_table);
    }
}
