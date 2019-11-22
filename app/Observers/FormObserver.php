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
use App\Models\Field;
use App\Models\Section;
use App\Models\Fieldset;
use App\Database\Migration;
use Illuminate\Support\Str;
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

            $table->string('identifiable_ip_address')->nullable();

            $table->timestamps();
        });

        $this->createFieldset($form);
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

        // Update table if changed
        if ($old->table !== $form->table) {
            $this->migration->schema->rename($old->table, $form->table);
        }

        $this->updateFieldset($old, $form);
    }

    /**
     * Handle the form "deleting" event.
     *
     * @param  \App\Models\Form  $form
     * @return void
     */
    public function deleting(Form $form)
    {
        $this->deleteFieldset($form);
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

    /**
     * Automatically create a fieldset for our form.
     * 
     * @param  Form  $form
     */
    protected function createFieldset($form)
    {
        $form::unsetEventDispatcher();

        $fieldsetName = 'Form: '.$form->name;

        $request = [
            'name' => $fieldsetName,
            'handle' => Str::slug($fieldsetName, '_'),
            'fields' => $form->fieldset->sections,
        ];

        // fusion()->post('')

        $fieldset         = new Fieldset;
        $fieldset->name   = $fieldsetName;
        $fieldset->handle = Str::slug($fieldsetName, '_');
        $fieldset->save();

        $section         = new Section;
        $section->name   = 'General';
        $section->handle = 'general';
        $section->save();

        $fieldset->sections()->save($section);

        $form->fieldsets()->save($fieldset);
        $form->save();
    }

    /**
     * Automatically update the fieldset for our form.
     * 
     * @param  Form  $form
     */
    protected function updateFieldset($old, $new)
    {
        $fieldset = $old->fieldsets()->first();

        if ($old->name !== $new->name) {
            $fieldsetName = 'Form: '.$new->name;

            $fieldset->name   = $fieldsetName;
            $fieldset->handle = Str::slug($fieldsetName, '_');
            $fieldset->save();
        }
    }

    /**
     * Automatically delete the fieldset from our form.
     * 
     * @param  Form  $form
     */
    protected function deleteFieldset($form)
    {
        $fieldset = $form->fieldsets()->first();

        $fieldset->delete();
    }
}
