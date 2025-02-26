<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory; // Laravel factory support for seeding (optional)

    protected $table = 'branches'; // Table name in the database

    protected $fillable = [
        'branchName',
        'branchAddress',
        'branchManagerName',
        'branchState',
        'branchDistrict',
        'branchPinCode',
        'branchImage',
        'contactNumber1',
        'contactNumber2',
        'delete_status'
    ];
}
