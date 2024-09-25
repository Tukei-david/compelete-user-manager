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
        Schema::table('users', function (Blueprint $table) {
            $table->string('cover_photo', 255)->nullable()->after('id');
            $table->date('birthday_date')->nullable();
            $table->string('gender')->nullable()->after('email');
            $table->string('street_address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->text('about')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('sub_title')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('cover_photo');
            $table->dropColumn('birthday_date');
            $table->dropColumn('gender');
            $table->dropColumn('street_address');
            $table->dropColumn('zip_code');
            $table->dropColumn('country');
            $table->dropColumn('city');
            $table->dropColumn('province');
            $table->dropColumn('about');
            $table->dropColumn('phone_number');
            $table->dropColumn('sub_title');
        });
    }
};
