<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cover_photo',
        'birthday_date',
        'gender',
        'street_address',
        'zip_code',
        'country',
        'province',
        'about',
        'phone_number',
        'sub_title'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
