<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImportLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('import_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('import_id');
            $table->unsignedInteger('total_rows');
            $table->unsignedInteger('progress')->default(0);
            $table->dateTime('completed_at')->nullable();
            $table->timestamps();

            $table->foreign('import_id')
                ->references('id')->on('imports')
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
        Schema::dropIfExists('import_logs');
    }
}
