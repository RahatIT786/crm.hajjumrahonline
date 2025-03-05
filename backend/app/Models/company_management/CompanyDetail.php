<?php

namespace App\Models\company_management;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyDetail extends Model
{
    use HasFactory;

    protected $hidden=[
        'delete_status',
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'company_name',
        'company_display_name',
        'contact_person',
        'mobile_number',
        'email',
        'website',
        'landline_number',
        'registered_address',
        'about_company',
        'country',
        'state',
        'city',
        'company_logo',
        'gst',
        'pan'
    ];

}
