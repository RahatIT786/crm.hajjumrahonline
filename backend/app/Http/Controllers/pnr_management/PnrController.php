<?php

namespace App\Http\Controllers\pnr_management;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\PnrDetail;
use App\Services\pnr_management\PnrService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class PnrController extends Controller
{
    protected $pnrService;
    
    public function __construct(PnrService $pnrService)
    {
        $this->pnrService = $pnrService;
    }

    public function addPnr(Request $request)
    {
        
        
        $data = $request->all();
        // Log::info('Pnr Data: '.json_encode($data));
        // // $pnrService = new PnrService();
        $newPnr = $this->pnrService->addPnr($data);
      
        Cache::forget('pnrs');
        return response()->json([
            'message' => 'Pnr added successfully',
        'pnr'=>$newPnr]);
     
    }

    public function getPnrs()
    {
        $pnrs=Cache::remember('pnrs',60,function(){
            return $this->pnrService->getPnrs();
        });
        return response()->json(['pnrs' => $pnrs]);
        // return $this->pnrService->getPnrs();
    }

    public function getBookings()
    {
     $bookingDetails=  Booking::where('delete_status',1)->get();
     return response()->json(['bookings'=>$bookingDetails]);
    }

    public function updateBookingStatus(Request $request,$id)
    {
        $booking = Booking::where('id', $id)->where('delete_status', 1)->firstOrFail();
        if($request->status===2){
            $booking->pnr_status=$request->status;

            $bookingPax= $booking->booking_seats;
            PnrDetail::where('pnr_code',$booking->booking_pnr_number)->decrement('available_seat',$bookingPax);
        }
        elseif($request->status===3){
            $booking->pnr_status=$request->status;
            
        }
        else{
            return response()->json(['message'=>'Invalid status']);
        }
        $booking->save();
        return response()->json(['message'=>'Booking status updated successfully']);
    }
}
