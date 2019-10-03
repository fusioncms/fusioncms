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
            $table->increments('id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('type');

            $table->boolean('sidebar')->default(true);
            $table->boolean('quicklink')->default(true);
            $table->string('icon')->nullable();

            $table->string('route')->nullable();
            $table->string('template')->nullable();

            $table->boolean('revision_control')->default(true);
            $table->boolean('creditable')->default(true);
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
