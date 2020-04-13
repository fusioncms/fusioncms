<?php

namespace Fusion\Observers;

use Fusion\Models\Menu;
use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Fieldset;
use Fusion\Database\Migration;
use Illuminate\Support\Str;
use Fusion\Database\Schema\Blueprint;

class MenuObserver
{
    /**
     * @var \Fusion\Database\Migration
     */
    protected $migration;

    /**
     * Create a new MenuObserver instance.
     *
     * @param  \Fusion\Database\Migration  $migration
     */
    public function __construct(Migration $migration)
    {
        $this->migration = $migration;
    }

    /**
     * Handle the menu "created" event.
     *
     * @param  \Fusion\Models\Menu  $menu
     * @return void
     */
    public function created(Menu $menu)
    {
        $this->migration->schema->create($menu->table, function (Blueprint $table) use ($menu) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('menu_id')->index();
            $table->unsignedBigInteger('parent_id')->index()->default(0);
            $table->string('name');
            $table->string('url')->nullable();
            $table->boolean('new_window')->default(false);
            $table->float('order', 12, 6)->nullable()->index();

            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        $this->createFieldset($menu);
    }

    /**
     * Handle the menu "updating" event.
     *
     * @param  \Fusion\Models\Menu  $menu
     * @return void
     */
    public function updating(Menu $menu)
    {
        // Fetch our "old" menu instance
        $old = Menu::find($menu->id);

        // Update table if changed
        if ($old->table !== $menu->table) {
            $this->migration->schema->rename($old->table, $menu->table);
        }

        $this->updateFieldset($old, $menu);
    }

    /**
     * Handle the menu "deleting" event.
     *
     * @param  \Fusion\Models\Menu  $menu
     * @return void
     */
    public function deleting(Menu $menu)
    {
        $this->deleteFieldset($menu);
    }

    /**
     * Handle the menu "deleted" event.
     *
     * @param  \Fusion\Models\Menu  $menu
     * @return void
     */
    public function deleted(Menu $menu)
    {
        $this->migration->schema->dropIfExists($menu->table);
    }

    /**
     * Automatically create a fieldset for our menu.
     *
     * @param  Menu  $menu
     */
    protected function createFieldset($menu)
    {
        $menu::unsetEventDispatcher();

        $fieldsetName = 'Menu: '.$menu->name;

        // Create the fieldset first
        $fieldset = fusion()->post('fieldsets', [
            'name'   => $fieldsetName,
            'handle' => Str::slug($fieldsetName, '_'),
        ]);

        // Resolve the model instance
        $fieldset = Fieldset::find($fieldset->data->id);

        // Then create the sections/fields
        $sections = fusion()->post('fieldsets/'.$fieldset->id.'/sections', $fieldset->toArray());

        $menu->attachFieldset($fieldset);
        $menu->save();
    }

    /**
     * Automatically update the fieldset for our menu.
     *
     * @param  Menu  $menu
     */
    protected function updateFieldset($old, $new)
    {
        $fieldset = $old->fieldsets()->first();

        if ($old->name !== $new->name) {
            $fieldsetName = 'Menu: '.$new->name;

            $fieldset->name   = $fieldsetName;
            $fieldset->handle = Str::slug($fieldsetName, '_');
            $fieldset->save();
        }
    }

    /**
     * Automatically delete the fieldset from our menu.
     *
     * @param  Menu  $menu
     */
    protected function deleteFieldset($menu)
    {
        $fieldset = $menu->fieldsets()->first();

        $fieldset->delete();
    }
}
