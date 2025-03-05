<?php

namespace App\Http\Controllers\staff_management;
use App\Services\staff_management\StaffService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\staff_management\Staff;
use Illuminate\Support\Facades\Validator;

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
        return response()->json(['status' => true,'message' => 'Staff created successfully', 'staff' => $staff], 201);
    }

    public function getStaff(){
        $staff = Staff::where('delete_status', 1)->get();
        return response()->json($staff);
        //return $this->staffService->getStaff();
    }

    public function deleteStaff($id) {
        $staff = Staff::find($id);
        
        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }
    
        $staff->delete_status = 2; // Change status instead of deleting
        $staff->save();
    
        return response()->json(['message' => 'Staff deleted successfully']);
    }

    public function getStaffById($id) {
        $staff = Staff::find($id);
        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }
        return response()->json($staff);
    }

    public function staffUpdate(Request $request, $id)
    {

        \Log::info('Request Data:', $request->all()); // Log the request data
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'mobile' => 'required',
            'role' => 'required',
            'salary' => 'required',
            'department' => 'required|string',
            'office_no' => 'nullable|string',
            'details' => 'nullable|string',
            'country' => 'required|string',
            'city' => 'required|string',
            'postal_code' => 'nullable|string',
            'address' => 'required|string',
            // Add other fields as necessary
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Find the staff member by ID
        $staff = Staff::find($id);

        if (!$staff) {
            return response()->json(['message' => 'Staff not found'], 404);
        }

        // Update staff details
        $staff->update($request->all());

        return response()->json(['message' => 'Staff updated successfully'], 200);
    }
    

}
