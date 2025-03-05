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
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('mobile')->unique();
            $table->string('role');
            $table->integer('salary');
            $table->string('password');
            $table->string('department');
            $table->string('office_no');
            $table->text('details')->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('postal_code');
            $table->text('address');
            $table->string('staff_image')->nullable();
            $table->integer('delete_status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
