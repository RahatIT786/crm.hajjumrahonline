<?php

namespace App\Services\company_management;

use App\Repositories\company_management\CompanyDetailRepo;
use Exception;
use Illuminate\Support\Facades\Log;

class CompanyDetailService
{
    /**
     * Create a new class instance.
     */
    protected $companyDetailRepo;
    public function __construct(CompanyDetailRepo $companyDetailRepo)
    {
     $this->companyDetailRepo=$companyDetailRepo;
    }

    public function create($companyDetail){
        return $this->companyDetailRepo->create($companyDetail);
       

    }
}
