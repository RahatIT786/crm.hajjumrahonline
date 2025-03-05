<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\company_management\CompanyManagementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\staff_management\StaffController;
use Illuminate\Support\Facades\Log;
use App\Models\staff_management\Staff;


Route::middleware('api.key')->post('/departure-city',
function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:api')->group(function(){
    Route::get('/profile',[AuthController::class,'testProfile']);

    Route::post('/staff',[StaffController::class, 'createStaff']);

    // Route::post('/staff',function(Request $request){
    //         //dd($request->all());
    //         // Log::info('Received API Data:', ['data' => $request->all()]);
    //          Staff::create($request->all());
    //         return response()->json(['name' => $request->firstName,'status' => 'success','message' => 'Keep rocking Happy Hacking 🐱‍💻','data' =>$request->all()]);
    //     });

    Route::post('/addcompany',[CompanyManagementController::class,'createCompanyDetail']);
    Route::post('/sample',function(){
        return response()->json([
            'message'=>"Company created succefully..!🙌🙌",
        ]);
    });

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

?>