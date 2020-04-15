<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fields', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('section_id');
            $table->string('name');
            $table->string('handle');
            $table->text('help')->nullable();
            $table->boolean('required')->default(false);
            $table->string('type');
            $table->text('validation')->nullable();
            $table->text('settings')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('locked')->default(false);
            $table->timestamps();

            $table->foreign('section_id')
                ->references('id')->on('sections')
                ->onDelete('cascade');

            $table->unique(['section_id', 'handle']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fields');
    }
}
