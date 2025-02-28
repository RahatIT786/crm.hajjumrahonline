<?php

namespace App\Http\Controllers;

use App\Helpers\Message;
use App\Http\Requests\ApiLoginRequest;
use App\Models\Crmuser;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
   
    protected $authService;
    public function __construct(AuthService $auth)
    {
        $this->authService = $auth;
    }



    public function register(ApiLoginRequest $request){
        $request->validate([
            'name' => 'required|string|max:30',
            'email' => 'required|email|unique:crmusers',
            'password' => 'required|string|min:6',
            'role_id' => 'required|integer'
        ]);
        
      
      try{
        return  $this->authService->register($request);
      
      }
        catch(\Exception $e){
            return response()->json(['message'=>$e->getMessage()],500);
        }

    }

    public function login(Request $request){
      
       return $this->authService->login($request);
    }


    public function testProfile(Request $request){

        $user =auth('api')->user();
        if(!$user){
            return response()->json([
                'message'=>Message::get('invalid_credentials')
            ]);
        }
        return response()->json([
            'message' => 'Access granted!',
            'user' => $user
        ], 200);
    }
}
