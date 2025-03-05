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

    public function create(array $companyDetail){
        return $this->companyDetailRepo->create($companyDetail);
       

    }

    public function checkMailExist($email){
       return $this->companyDetailRepo->checkMailExist($email);
    }

    public function getAllCompanyDetails(){
        return $this->companyDetailRepo->getAllCompanyDetail();
    }
}
