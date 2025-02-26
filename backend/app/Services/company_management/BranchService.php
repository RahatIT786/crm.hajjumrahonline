<?php

namespace App\Services\Company_management;
use App\Repositary\company_management\BranchRepo;

class BranchService{
    protected $branchRepo;
    public function __construct(BranchRepo $branchRepo){
        $this->branchRepo=$branchRepo;
    }

    public function create(array $data) {
      return  $this->branchRepo->create($data);
    }
}

