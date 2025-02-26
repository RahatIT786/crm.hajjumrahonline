<?php

namespace App\Http\Controllers;

use App\Events\DataStored;
use App\Models\DepartureCity;
use App\Services\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class PackageController extends Controller
{
    protected $cityservice;

    public function __construct(Test $testServices){
        $this->cityservice=$testServices;
    }

     // Fetch all packages
        // Fetch dummy data
        public function index()
        {
        //     $packages3 = [
        //         ['id' => 1, 'name' => 'Basic Package', 'price' => 100, 'description' => 'Basic package description.'],
        //         ['id' => 2, 'name' => 'Premium Package', 'price' => 250, 'description' => 'Premium package description.'],
        //         ['id' => 3, 'name' => 'Luxury Package', 'price' => 500, 'description' => 'Luxury package description.'],
        //         ['id' => 3, 'name' => 'Karthis Ram', 'price' => 500, 'description' => 'Luxury package description.']
        //     ];
        //    $packages= DepartureCity::where('delete_status',1)->get();
    
            
            return response()->json($this->cityservice->getAllCity());
        }


        public function store(Request $request){
            $request->validate([
                'name' => 'required|string|max:255',
                
            ]);

            $city=DepartureCity::create([
                'CityName'=>$request->name,

            ]);
  

            return response()->json([
                'Data Saved Successfully..!',
                'data'=>$city
            ]);
    

        }

        public function clearCache(){
            Artisan::call('optimize');
            return "DEAR ADMIN YOUR APPLICATION CACHES ARE CLEARED !";
        }
    
        public function migrate(){
            try {
                // Capture the output from the Artisan command
                Artisan::call('migrate', ['--force' => true]); // '--force' to run without confirmation in production
        
                // Get the output as a string
                $outputString = Artisan::output();
        
                // Return the output to the view or as a response
                // return response()->json(['status' => 'success', 'message' => $outputString]);
                return $outputString;
            } catch (\Exception $e) {
                // Catch any errors and return them
               return $e->getMessage();
                // return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
            }
        }


        
}
