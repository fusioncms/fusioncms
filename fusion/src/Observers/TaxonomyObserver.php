<?php

namespace Fusion\Observers;

use Fusion\Models\Taxonomy;
use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;

class TaxonomyObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Create a new TaxonomyObserver instance.
     *
     * @param  \Fusion\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the taxonomy "created" event.
     *
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function created(Taxonomy $taxonomy)
    {
        $this->migration->schema->create($taxonomy->table, function (Blueprint $table) use ($taxonomy) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('taxonomy_id');
            $table->unsignedBigInteger('parent_id')->nullable();

            $table->string('name');
            $table->string('slug')->unique()->nullable();

            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        $this->migration->schema->create($taxonomy->pivot_table, function (Blueprint $table) use ($taxonomy) {
            $table->unsignedBigInteger($taxonomy->handle.'_id');
            $table->unsignedBigInteger('field_id');
            $table->morphs('pivot');

            $table->foreign($taxonomy->handle.'_id')
                ->references('id')->on($taxonomy->table)
                ->onDelete('cascade');

            $table->foreign('field_id')
                ->references('id')->on('fields')
                ->onDelete('cascade');
        });
    }

    /**
     * Handle the taxonomy "updating" event.
     *
     * @param  \Fusion\Models\Taxonomy  $taxonomy
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
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function deleting(Taxonomy $taxonomy)
    {
        $taxonomy->detachFieldset();
    }

    /**
     * Handle the taxonomy "deleted" event.
     *
     * @param  \Fusion\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function deleted(Taxonomy $taxonomy)
    {
        $this->migration->schema->dropIfExists($taxonomy->table);
        $this->migration->schema->dropIfExists($taxonomy->pivot_table);
    }
}
