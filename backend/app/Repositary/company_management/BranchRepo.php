<?php

namespace App\Repositary\Company_management;
use App\Models\Branch;
use App\Interface\Company_management\BranchInterface;

class BranchRepo implements BranchInterface
{
    public function create(array $data){
        return Branch::create($data);
    }
}
