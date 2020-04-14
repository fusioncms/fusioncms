<?php

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
        Schema::create('settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('section_id');
            $table->string('name');
            $table->string('handle');
            $table->string('group');
            $table->string('override');
            $table->string('component');
            $table->string('description');
            $table->string('type');
            $table->text('options')->nullable();
            $table->text('default')->nullable();
            $table->text('value')->nullable();
            $table->boolean('required');
            $table->boolean('gui');
            $table->unsignedInteger('order');
            $table->timestamps();

            $table->foreign('section_id')
                ->references('id')->on('setting_sections')
                ->onDelete('cascade');

            $table->unique(['section_id', 'handle']);
        });
    }

    /**
     * Reverse the migration.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('settings');
    }
}
