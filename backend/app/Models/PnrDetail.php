<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PnrDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'pnr_code',
        'pnr_date',
        'airline',
        'total_seat',
        'available_seat',
        'city',
        'delete_status'
    ];
}
