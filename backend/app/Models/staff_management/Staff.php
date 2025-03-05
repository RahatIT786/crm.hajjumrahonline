<?php

namespace App\Models\staff_management;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Staff extends Model
{
    use HasFactory;
    protected $hidden=[
        'delete_status',
        'created_at',
        'updated_at'
    ];

    protected $fillable=[
        'first_name',
        'last_name',
        'email',
        'mobile',
        'role',
        'salary',
        'password',
        'department',
        'office_no',
        'details',
        'country',
        'city',
        'postal_code',
        'address',
        'staff_image',
        'delete_status',
    ];
}
