<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->bigIncrements('id');

            // Describe the form
            $table->string('name');
            $table->string('handle')->unique();
            $table->text('description')->nullable();
            
            // Privacy
            $table->boolean('anonymous')->default(false);

            // Confirmation settings
            $table->text('confirmation_message')->nullable();
            $table->boolean('redirect_on_submission')->default(false);
            $table->string('redirect_url')->nullable();

            // Additional emails
            $table->text('send_to')->nullable();
            $table->string('reply_to')->nullable();

            // Templates
            $table->string('form_template')->nullable();
            $table->string('thanks_template')->nullable();

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
        Schema::dropIfExists('forms');
    }
}
