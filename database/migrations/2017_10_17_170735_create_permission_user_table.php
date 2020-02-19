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

class CreatePermissionUserTable extends Migration
{
    public function up()
    {
        Schema::create('permission_user', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('permission_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('permission_id')
                ->references('id')->on('permissions')
                ->onDelete('cascade');
                
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('permission_user');
    }
}
