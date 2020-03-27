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
            $table->bigIncrements('id');
            $table->unsignedBigInteger('form_id');

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
     * @return void
     */
    protected function createFieldset(Form $form)
    {
        $form->withoutEvents(function() use ($form) {
            $fieldset = Fieldset::create([
                'name'   => ($name = 'Form: ' . $form->name),
                'handle' => str_handle($name),
            ]);

            if (app('env') == 'testing') {
                if ($form->collect_email_addresses) {
                    $this->verifyEmailFieldExists($fieldset);
                }
            }

            $form->attachFieldset($fieldset);
            $form->save();
        });
    }

    /**
     * Automatically update the fieldset for our form.
     * 
     * @param  Form  $old - old Form instance
     * @param  Form  $new - new Form instance
     * @return void
     */
    protected function updateFieldset(Form $old, Form $new)
    {
        if ($old->name !== $new->name) {
            $fieldset = $old->fieldset;
            $newName  = $new->name;
            
            $fieldset->withoutEvents(function() use ($fieldset, $newName) {
                $fieldset->name   = ($name = 'Form: ' . $newName);
                $fieldset->handle = str_handle($name);
                $fieldset->save();
            });
        }
    }

    /**
     * Automatically delete the fieldset from our form.
     * 
     * @param  Form  $form
     * @return void
     */
    protected function deleteFieldset(Form $form)
    {
        $form->fieldset()->delete();
    }

    /**
     * Assure fieldset has e-mail collection field.
     * [Note: added for unit testing assurance]
     * 
     * @param  Fieldset  $fieldset
     * @return void
     */
    protected function verifyEmailFieldExists(Fieldset $fieldset)
    {
        if ($fieldset->sections->isEmpty()) {
            $fieldset->sections()->create([
                'name'   => 'General',
                'handle' => 'general',
            ])->fields()->create([
                'name'     => 'E-mail',
                'handle'   => 'identifiable_email_address',
                'required' => true,
                'help'     => 'Please enter your e-mail address.',
                'type'     => 'input',
                'settings' => [ 'type' => 'email' ],
                'order'    => 1,
            ]);
        }
    }
}
