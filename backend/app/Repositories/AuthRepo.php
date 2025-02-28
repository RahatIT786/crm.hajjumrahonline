<?php

namespace App\Repositories;

use App\Models\Crmuser;
use Illuminate\Support\Facades\Hash;

class AuthRepo
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        
    }

    public function register($request){

    // $request['password'] = Hash::make($request['password']);
    $request['password'] = bcrypt($request['password']);
     return  Crmuser::create($request->only('name','email','password','role_id'));
    }
}
