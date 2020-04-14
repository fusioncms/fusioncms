<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->string('slug')->unique();
            $table->string('handle')->unique();
            $table->text('description')->nullable();

            // Privacy
            $table->boolean('collect_email_addresses')->default(false);
            $table->boolean('collect_ip_addresses')->default(false);
            $table->boolean('response_receipt')->default(false);

            // Confirmation settings
            $table->text('message')->nullable();
            $table->boolean('redirect_on_submission')->default(false);
            $table->string('redirect_url')->nullable();

            // Spam
            $table->boolean('enable_recaptcha')->default(false);
            $table->boolean('enable_honeypot')->default(false);

            // Additional emails
            $table->text('send_to')->nullable();
            $table->string('reply_to')->nullable();

            // Templates
            $table->string('form_template')->nullable();
            $table->string('thankyou_template')->nullable();

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
        Schema::dropIfExists('forms');
    }
}
