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

            $table->string('identifiable_email_address')->nullable();
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

        // $this->updateFieldset($form);
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

    /**
     * Automatically create a fieldset for our forms.
     * 
     * @param  Form  $form
     */
    protected function createFieldset($form)
    {
        $fieldsetName = 'Form: '.$form->name;

        $fieldset         = new Fieldset;
        $fieldset->name   = $fieldsetName;
        $fieldset->handle = Str::slug($fieldsetName, '_');
        $fieldset->save();

        $section            = new Section;
        $section->name      = 'General';
        $section->handle    = 'general';
        $section->placement = 'body';
        $section->save();

        $fieldset->sections()->save($section);

        if ($form->collect_email_addresses) {
            $field            = new Field;
            $field->section_id = $section->id;
            $field->name       = 'E-mail';
            $field->handle     = 'identifiable_email_address';
            $field->type       = 'input';
            $field->settings   = ['type' => 'email'];

            $field->save();
        }

        $form->fieldsets()->save($fieldset);
        $form->save();
    }

    protected function updateFieldset($old, $new)
    {
        // Alias the most up to date entity
        // $form = $new;

        // if ($old->name !== $new->name) {
        //     $fieldsetName     = 'Form: '.$form->name;
        //     $fieldset         = $form->fieldset;
        //     $fieldset->name   = $fieldsetName;
        //     $fieldset->handle = Str::slug($fieldsetName, '_');
        //     $fieldset->save();
        // }

        // if ($old->collect_email_addresses !== $form->collect_email_addresses) {
        //     if ($form->collect_email_addresses) {
        //         $field             = new Field;
        //         $field->section_id = $fieldset->sections()->first()->id;
        //         $field->name       = 'E-mail';
        //         $field->handle     = 'identifiable_email_address';
        //         $field->type       = 'input';
        //         $field->settings   = ['type' => 'email'];

        //         $field->save();
        //     } else {
                
        //     }            
        // }

        // $form->fieldsets()->save($fieldset);
        // $form->save();
    }
}
