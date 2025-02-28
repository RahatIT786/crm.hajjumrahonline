<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PackageController;

use App\Http\Controllers\staff_management\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\company_management\BranchController;
use App\Http\Controllers\pnr_management\PnrController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/api/packages', [PackageController::class, 'index']);


Route::post('/api/departure-city',[PackageController::class,'store']);
Route::post('/api/company-management/branches',[BranchController::class,'createBranch']);

Route::post('/api/city',[PackageController::class,'store']);

Route::post('/api/createrole',[RoleController::class,'createRole']);


Route::post('/api/add/pnr',[PnrController::class,'addPnr']);
Route::get('/api/get/pnrs',[PnrController::class,'getPnrs']);
Route::get('/api/get/bookings',[PnrController::class,'getBookings']);
Route::post('/api/bookings/{id}/update-status',[PnrController::class,'updateBookingStatus']);

Route::post('/api/register',[AuthController::class,'register']);
Route::post('/api/login',[AuthController::class,'login']);

Route::get('/optimize' ,[PackageController::class,'clearCache']);
Route::get('/migrate' ,[PackageController::class,'migrate']);

Route::middleware('auth:api')->group(function(){
    Route::get('/profile',[AuthController::class,'testProfile']);
});


Route::middleware('api.key')->post('/departure-city',
    function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});


/*
====================================================[START]
BELOW THE API FOR TESTING 💀
-YOU CAN USE POSTMAN TO TEST
-CAN GET CSRF TOKEN FROM /token 🔑
-POST TO /posttest WITH CSRF TOKEN AND NAME
-RESPONSE WILL BE JSON WITH NAME AND SUCCESS MESSAGE

API DOCUMENTATION
-EXAMPLE:{BODY:{"name":"ABU","_token":"YOUR_CSR"}}
-EXAMPLE: {"name":"ABU","status":"success","message":"Keep rocking Happy Hacking 🐱‍💻"}

                                -BY(ABU ♦)
                                -ENJOY HACKING 🐱‍💻
=============================================================
*/
Route::get('/token',function(){
    return array('csrf'=>csrf_token());
});
Route::post('/posttest',function(Request $request){
    return response()->json(['name' => $request->name,'status' => 'success','message' => 'Keep rocking Happy Hacking 🐱‍💻']);
});
//====================================================[END]
