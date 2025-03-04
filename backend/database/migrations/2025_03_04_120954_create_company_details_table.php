<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('company_details', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_display_name');
            $table->string('contact_person');
            $table->string('mobile_number');
            $table->string('email', 40)->unique();
            $table->string('website')->nullable();
            $table->string('landline_number')->nullable();
            $table->string('registered_address');
            $table->string('about_company')->nullable();
            $table->string('gst');
            $table->string('pan');
            $table->string('country');
           
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('company_logo')->nullable();
            $table->integer('delete_status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_details');
    }
};
