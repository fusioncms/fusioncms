<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matrices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('parent_id')->default(0);
            $table->string('name');
            $table->string('handle')->unique();
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('type');

            $table->string('reference_singular')->default('');
            $table->string('reference_plural')->default('');

            $table->boolean('sidebar')->default(true);
            $table->boolean('quicklink')->default(true);
            $table->string('icon')->nullable();

            $table->boolean('show_name_field')->default(true);
            $table->string('name_label')->nullable();
            $table->string('name_format')->nullable();

            $table->string('route')->nullable();
            $table->string('template')->nullable();

            $table->boolean('revision_control')->default(true);
            $table->boolean('publishable')->default(true);
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
        Schema::dropIfExists('matrices');
    }
}
