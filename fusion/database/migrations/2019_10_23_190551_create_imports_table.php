<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->string('source');
            $table->string('schedule')->nullable();
            $table->string('module');
            $table->integer('group')->default(0);
            $table->text('strategy')->nullable();
            $table->text('preview')->nullable();
            $table->text('mappings')->nullable();
            $table->boolean('backup');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imports');
    }
}
