<?php

namespace App\Repositories\company_management;

use App\Models\company_management\CompanyDetail;
use Illuminate\Support\Arr;

class CompanyDetailRepo
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function create(array $companyDetail){
     return CompanyDetail::create($companyDetail);
    }

    public function checkMailExist($email){
        return  CompanyDetail::where('email',trim($email))->exists();
    }

    public function getAllCompanyDetail(){
        return CompanyDetail::where('delete_status',1)->get();
    }
}
