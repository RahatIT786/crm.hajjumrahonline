<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api.key')->post('/departure-city',
function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});







?>