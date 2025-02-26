<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $hidden=[
        'delete_status',
        'created_at',
        'updated_at'
    ];
    protected $fillable = [
        'booking_Id',
        'booking_pnr_number',
        'booking_airline',
        'booking_date',
        'booking_city',
        'booking_psngr_name',
        'booking_seats',
        'pnr_status',
        'delete_status',
    ];
}
