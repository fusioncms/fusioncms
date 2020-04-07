<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->unsignedInteger('next_row')->default(0);
            $table->unsignedInteger('total_rows')->default(0);
            $table->text('processed')->default('');
            $table->unsignedInteger('progress')->default(0);
            $table->string('log_file')->nullable();
            $table->string('status');
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
