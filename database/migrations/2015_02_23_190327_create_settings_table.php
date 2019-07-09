<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('system_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('handle')->default('');
            $table->text('description')->nullable();
            $table->enum('type', ['text', 'textarea', 'password', 'number', 'select', 'radio', 'checkbox', 'file', 'partial'])->default('text');
            $table->text('options')->nullable();
            $table->text('default')->nullable();
            $table->text('value')->nullable();
            $table->boolean('is_required');
            $table->boolean('is_gui');
            $table->string('group');
            $table->unsignedInteger('order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migration.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('system_settings');
    }
}
