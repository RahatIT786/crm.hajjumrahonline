<?php

namespace App\Repositories\staff_management;
use App\Models\staff_management\Staff;

class StaffRepo
{
    /**
     * Create a new class instance.
     */
    public function createStaff(array $data){
        try {
            return Staff::create($data);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
                return response()->json([
                    'success' => false,
                    'message' => 'Duplicate entry detected! Please use a unique email or phone number.',
                ], 409); // 409 Conflict HTTP status
            }
    
            // General Error Handling
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
       
    }
}
