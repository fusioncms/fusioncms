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

use App\Models\Matrix;
use App\Foundation\Database\Migration;
use App\Foundation\Database\Schema\Blueprint;

class MatrixObserver
{
    /**
     * @var \App\Foundation\Database\Migration
     */
    protected $migration;

    /**
     * Create a new MatrixObserver instance.
     *
     * @param  \App\Foundation\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the matrix "created" event.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return void
     */
    public function created(Matrix $matrix)
    {
        if ($matrix->type === 'page') {
            $this->migration->schema->create($matrix->table, function (Blueprint $table) {
                $table->integer('matrix_id')->unsigned();
                $table->boolean('status')->default(true);
                $table->timestamps();
            });
        }
    }

    /**
     * Handle the matrix "updating" event.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return void
     */
    public function updating(Matrix $matrix)
    {
        $old = Matrix::find($matrix->id);

        if ($matrix->type === 'collection' and $old->type === 'page') {
            $this->dropTable($old);
        }

        if ($matrix->type === 'page') {
            if ($old->table !== $matrix->table) {
                $this->migration->schema->rename($old->table, $matrix->table);
            }
        }

        if ($matrix->type === 'collection') {
            foreach ($matrix->types as $type) {
                $oldTable = $old->table . '_' . $type->handle;
                $newTable = $matrix->table . '_' . $type->handle;

                if ($oldTable !== $newTable) {
                    $this->migration->schema->rename($oldTable, $newTable);
                }
            }
        }
    }

    /**
     * Handle the matrix "deleted" event.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return void
     */
    public function deleted(Matrix $matrix)
    {
        if ($matrix->type === 'page') {
            $this->dropTable($matrix);
        }
    }

    /**
     * Drop the matrix database table.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return void
     */
    protected function dropTable($matrix)
    {
        $this->migration->schema->dropIfExists($matrix->table);
    }
}
