<?php

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



Route::get('/optimize' ,[PackageController::class,'clearCache']);
Route::get('/migrate' ,[PackageController::class,'migrate']);


Route::middleware('api.key')->post('/departure-city',
    function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});


