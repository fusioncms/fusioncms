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

 class CreateQueueTable extends Migration
 {
     /**
      * Run the migrations.
      *
      * @return void
      */
     public function up()
     {
         Schema::create('queue', function (Blueprint $table) {
             $table->bigIncrements('id');
             $table->string('queue');
             $table->longText('payload');
             $table->tinyInteger('attempts')->unsigned();
             $table->integer('reserved_at')->unsigned()->nullable();
             $table->integer('available_at')->unsigned();
             $table->integer('created_at')->unsigned();

             $table->index(['queue', 'reserved_at']);
         });
     }

     /**
      * Reverse the migrations.
      *
      * @return void
      */
     public function down()
     {
         Schema::dropIfExists('queue');
     }
 }
