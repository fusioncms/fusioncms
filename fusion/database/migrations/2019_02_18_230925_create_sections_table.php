<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('fieldset_id');
            $table->string('name');
            $table->string('handle');
            $table->string('description')->nullable();
            $table->string('placement')->default('body');
            $table->unsignedInteger('order')->default(0);
            $table->timestamps();

            $table->unique(['fieldset_id', 'handle']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sections');
    }
}
