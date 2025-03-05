<?php

namespace App\Http\Controllers\company_management;

use App\Http\Controllers\Controller;
use App\Models\company_management\CompanyDetail;
use App\Services\company_management\CompanyDetailService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use function PHPUnit\Framework\returnValue;

class CompanyManagementController extends Controller
{
    protected $companyDetailService;
    public function __construct(CompanyDetailService $companyDetailService){
        $this->companyDetailService=$companyDetailService;
    }


    public function createCompanyDetail(Request $request){

        Log::info('Received Data:', $request->all());
    Log::info('Uploaded File:', [$request->file('company_logo')]);
        $imagePath = null;
        if ($request->hasFile('company_logo')) {
            $imagePath = $request->file('company_logo')->store('company_logos', 'public'); // Store in storage/app/public/company_logos
        }
    
        // Prepare data to send to service layer
        $data = $request->except('company_logo'); // Remove file from request
        $data['company_logo'] =  $imagePath; // Store only file path
    
        try {
            // Pass data to service layer
            $companyDetail = $this->companyDetailService->create($data);
    
            return response()->json([
                'message' => "Company created successfully! 🙌",
                'company' => $companyDetail
            ], 201);
        } catch (Exception $e) {
            Log::error('Error creating company:', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Something went wrong!'], 500);
        }

       
    }







    public function checkCompanyDetailMailExist(Request $request){
        $request->validate([
            'email' => 'required|email' // Ensure email is valid
        ]);
        // $exists = CompanyDetail::where('email', $request->email)->exists();
       $exists=  $this->companyDetailService->checkMailExist($request->email);
        if ($exists) {
            return response()->json(['exists' => true, 'message' => 'Email already exists'], 200);
        }
        return response()->json(['exists' => false]);
    }


    public function getAllCompanyDetails(){
        $companyDetails=$this->companyDetailService->getAllCompanyDetails();
        return response()->json(['companyDetails'=>$companyDetails],200);
    }
     
}
