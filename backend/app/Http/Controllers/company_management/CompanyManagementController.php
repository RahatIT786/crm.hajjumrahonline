<?php

namespace App\Http\Controllers\company_management;

use App\Http\Controllers\Controller;
use App\Services\company_management\CompanyDetailService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CompanyManagementController extends Controller
{
    protected $companyDetailService;
    public function __construct(CompanyDetailService $companyDetailService){
        $this->companyDetailService=$companyDetailService;
    }


    public function createCompanyDetail(Request $request){

        $companyData = [
            'company_name' => $request->input('companyName'),
            'company_display_name' => $request->input('companyDisplayName'),
            'contact_person' => $request->input('contactPerson'),
            'mobile_number' => $request->input('mobileNumber'),
            'email' => $request->input('email'),
            'website' => $request->input('website'),
            'landline_number' => $request->input('landlineNumber'),
            'registered_address' => $request->input('registeredAddress'),
            'about_company' => $request->input('aboutCompany'),
            'gst' => $request->input('gst'),
            'pan' => $request->input('pan'),
            'country' => $request->input('country'),
            'state' => $request->input('state'),
            'city' => $request->input('city'),
        ];

        try {
           $companyDetail= $this->companyDetailService->create($companyData);
            
            return response()->json([
                'message' => "Company created successfully..! 🙌🙌",
                'company' => $companyDetail
            ], 201);
            
        } catch (Exception $e) {
            Log::error("Error adding company details: " . $e->getMessage());
    
            return response()->json([
                'message' => "Failed to create company.",
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
