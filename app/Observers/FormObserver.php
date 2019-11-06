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

use App\Models\Form;
use App\Database\Migration;
use App\Database\Schema\Blueprint;

class FormObserver
{
    /**
     * @var \App\Database\Migration
     */
    protected $migration;

    /**
     * Create a new FormObserver instance.
     *
     * @param  \App\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the form "created" event.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function created(Form $form)
    {
        $this->migration->schema->create($form->table, function (Blueprint $table) use ($form) {
            $table->increments('id');
            $table->integer('form_id')->unsigned();

            $table->string('email')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Handle the form "updating" event.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function updating(Form $form)
    {
        // Fetch our "old" form instance
        $old = Form::find($form->id);

        // Rename the tables if changed
        if ($old->table !== $form->table) {
            $this->migration->schema->rename($old->table, $form->table);
        }
    }

    /**
     * Handle the form "deleting" event.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function deleting(Form $form)
    {
        $form->detachFieldset();
    }

    /**
     * Handle the form "deleted" event.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function deleted(Form $form)
    {
        $this->migration->schema->dropIfExists($form->table);
    }
}
