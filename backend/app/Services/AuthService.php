<?php

namespace App\Services;

use App\Helpers\Message;
use App\Models\Crmuser;
use App\Repositories\AuthRepo;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{
    protected $authrepo;
    public function __construct(AuthRepo $authrepo)
    {
        $this->authrepo = $authrepo;
    }

    /**
     * Create a new class instance.
     */
 

    public function register($request)
    {
       $user= $this->authrepo->register($request);

       $token= JWTAuth::fromUser($user);
       $status='success';
       return response()->json(compact('user','token','status'),201);

       
    }

    public function login($request)
    {
        $credentials=$request->only('email','password');

        $user=Crmuser::where('email',$credentials['email'])->first();

        //check if user exists
        if(!$user){
            return response()->json(['message'=>Message::get('user_not_found')],404);
        }

        //verify password manually
        if(!Hash::check($credentials['password'],$user->password)){
            return response()->json(['message'=>Message::get('incorrect_password')],401);
        }

        if(!$token=auth('api')->attempt($credentials)){
            return response()->json(['message'=>Message::get('invalid_credentials')],401);
        }

        $message=Message::get('login_success');

        $user=auth('api')->user();

        
        return response()->json(compact('user','token','message'),200);
    }
}

