<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use App\Database\Migration;
use App\Database\Schema\Blueprint;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema->create('files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('directory_id')->nullable();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('uuid')->unique();
            $table->text('description')->nullable();
            $table->string('location');
            $table->string('original');
            $table->string('extension');
            $table->string('mimetype');
            $table->integer('bytes');
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
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
        $this->schema->dropIfExists('files');
    }
}
