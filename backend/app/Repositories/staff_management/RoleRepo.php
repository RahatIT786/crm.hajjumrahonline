<?php

namespace App\Repositories\staff_management;


use App\Interfaces\staff_management\RoleInterface;
use App\Models\staff_management\Role;

class RoleRepo 
{
    /**
     * Create a new class instance.
     */
    public function createRole(array $data){
        return Role::create($data );
    }


    
}
