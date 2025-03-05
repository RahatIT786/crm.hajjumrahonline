<?php

namespace App\Http\Controllers\staff_management;
use App\Services\staff_management\StaffService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    protected $staffService;

    public function __construct(StaffService $staffService){
        $this->staffService = $staffService;
    }

    public function createStaff(Request $request)
    {

        $validated = $request->validate([
            'first_name'   => 'required',
            'last_name'    => 'required',
            'email'        => 'required',
            'mobile'       => 'required',
            'role'         => 'required',
            'salary'       => 'required',
            'password'     => 'required',
            'department'   => 'required',
            'office_no'    => 'required',
            'details'      => 'nullable',
            'country'      => 'required',
            'city'         => 'required',
            'postal_code'  => 'required',
            'address'      => 'required',
            'package_image' => 'nullable',
            'delete_status' => 'nullable',
        ]);
    
        // Store Image (if provided)
        // if ($request->hasFile('package_image')) {
        //     $imagePath = $request->file('package_image')->store('staff_images', 'public');
        //     $validated['package_image'] = $imagePath;
        // }
    
        $staff = $this->staffService->createStaff($validated);
        return response()->json(['message' => 'Staff created successfully', 'staff' => $staff], 201);
    }
}
