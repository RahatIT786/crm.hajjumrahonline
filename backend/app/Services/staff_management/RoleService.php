<?php

namespace App\Services\staff_management;

use App\Repositories\staff_management\RoleRepo;

class RoleService
{
    protected $roleRepo;
    /**
     * Create a new class instance.
     */
    public function __construct(RoleRepo $roleRepo)
    {
        $this->roleRepo=$roleRepo;
    }

    public function createRole(array $data){

        return $this->roleRepo->createRole($data);
    }
}
