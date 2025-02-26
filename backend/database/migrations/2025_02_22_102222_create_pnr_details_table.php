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
        Schema::create('pnr_details', function (Blueprint $table) {
            $table->id();
            $table->string('pnr_code');
            $table->date('pnr_date');
            $table->string('airline');
            $table->integer('total_seat');
            $table->integer('available_seat');
            $table->string('city');
            $table->integer('delete_status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pnr_details');
    }
};
