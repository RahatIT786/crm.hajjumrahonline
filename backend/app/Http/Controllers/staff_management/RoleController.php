<?php

namespace App\Http\Controllers\staff_management;

use App\Http\Controllers\Controller;
use App\Services\staff_management\RoleService;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    protected $roleService;

    public function __construct(RoleService $roleService){
        $this->roleService=$roleService;
    }






    public function createRole(Request $request){
        $validated =$request->validate([
            'name'=>'required|string|max:255',
        ]);
        $role=$this->roleService->createRole($validated);
        return response()->json(['message'=>'Role created Successfully ','role'=>$role],201);
    }

}
