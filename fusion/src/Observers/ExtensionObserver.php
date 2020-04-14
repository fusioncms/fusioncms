<?php

namespace Fusion\Observers;

use Fusion\Models\Extension;
use Fusion\Database\Migration;
use Fusion\Database\Schema\Blueprint;

class ExtensionObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Create a new ExtensionObserver instance.
     *
     * @param  \Fusion\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the extension "created" event.
     *
     * @param  \Fusion\Models\Extension  $extension
     * @return void
     */
    public function created(Extension $extension)
    {
        $this->migration->schema->create($extension->table, function (Blueprint $table) use ($extension) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('extension_id');
            $table->unsignedBigInteger('related_id');

            $table->foreign('extension_id')
                ->references('id')->on('extensions')
                ->onDelete('cascade');

            $table->foreign('related_id')
                ->references('id')->on($extension->handle)
                ->onDelete('cascade');
        });
    }


    /**
     * Handle the extension "deleted" event.
     *
     * @param  \Fusion\Models\Extension  $extension
     * @return void
     */
    public function deleted(Extension $extension)
    {
        $this->migration->schema->dropIfExists($extension->table);
    }
}
