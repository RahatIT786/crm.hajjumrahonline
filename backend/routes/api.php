<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api.key')->post('/departure-city',
function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:api')->group(function(){
    Route::get('/profile',[AuthController::class,'testProfile']);
});



?>