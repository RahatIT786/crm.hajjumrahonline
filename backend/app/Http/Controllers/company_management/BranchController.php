<?php

namespace App\Http\Controllers\company_management;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Company_management\BranchService;


class BranchController extends Controller
{
    protected $branch;

    public function __construct(BranchService $branchService){
        $this->branch = $branchService;
    }

    public function createBranch(Request $request){
        $validated = $request->validate([
            'branchName' => 'required|string|max:255',
            'branchAddress' => 'required|string|max:255',
            'branchManagerName' => 'required|string|max:255',
            'branchState' => 'required|string|max:255',
            'branchDistrict' => 'required|string|max:255',
            'branchPinCode' => 'required|numeric|digits:6',  // Assuming 6-digit pin code
            'branchImage' => 'nullable|image|mimes:jpeg,png,jpg,gif', // Optional image, 2MB max
            'contactNumber1' => 'required|numeric|digits_between:10,15', // Phone number validation
            'contactNumber2' => 'nullable|numeric|digits_between:10,15', // Optional second contact number
        ]);

        $branch=$this->branch->create($validated);
        return response()->json(['message' => 'Branch is Successfully','branch'=>$branch],201);
    }
}
