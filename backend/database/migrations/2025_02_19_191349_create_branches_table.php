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
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('branchName');
            $table->text('branchAddress');
            $table->string('branchManagerName');
            $table->string('branchState');
            $table->string('branchDistrict');
            $table->string('branchPinCode');
            $table->string('branchImage')->nullable();
            $table->string('contactNumber1');
            $table->string('contactNumber2')->nullable();
            $table->tinyInteger('delete_status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
