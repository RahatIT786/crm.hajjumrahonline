<?php

namespace App\Repositories\company_management;

use App\Models\company_management\CompanyDetail;

class CompanyDetailRepo
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function create($companyDetail){
     return CompanyDetail::create($companyDetail);
    }
}
