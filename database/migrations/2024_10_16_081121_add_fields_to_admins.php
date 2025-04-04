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
        // Schema::create('admins', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('firstname');
        //     $table->string('lastname');
        //     $table->string('access_level');
        //     $table->string('email')->unique();
        //     $table->string('password');
        //     $table->string('is_active');
        //     $table->string('remember_token')->nullable();
        //     $table->string('phone')->nullable();
        //     $table->string('last_login_at')->nullable();
        //     $table->timestamps();
        // });
        Schema::table('admins', function (Blueprint $table) {
            // $table->id();
            $table->string('firstname');
            $table->string('lastname');
            // $table->string('access_level');
            // $table->string('email')->unique();
            // $table->string('password');
            $table->string('is_active');
            $table->string('remember_token')->nullable();
            $table->string('phone')->nullable();
            $table->string('last_login_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
