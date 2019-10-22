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
        }
    }

    /**
     * Handle the taxonomy "deleted" event.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    public function deleted(Taxonomy $taxonomy)
    {
        $this->dropTable($taxonomy);
    }

    /**
     * Drop the taxonomy database table.
     *
     * @param  \App\Models\Taxonomy  $taxonomy
     * @return void
     */
    protected function dropTable($taxonomy)
    {
        $this->migration->schema->dropIfExists($taxonomy->table);
    }
}
