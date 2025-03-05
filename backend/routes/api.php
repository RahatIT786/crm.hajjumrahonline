<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\company_management\CompanyManagementController;
use App\Models\company_management\CompanyDetail;
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


    Route::post('/addcompany',[CompanyManagementController::class,'createCompanyDetail']);
    Route::get('/getcompany',[CompanyManagementController::class,'getAllCompanyDetails']);
    Route::post('/check-email', [CompanyManagementController::class,'checkCompanyDetailMailExist']);


    Route::post('/sample',function(){
        return response()->json([
            'message'=>"Company created succefully..!🙌🙌",
        ]);
    });
});



?>