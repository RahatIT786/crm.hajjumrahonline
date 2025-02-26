<?php

namespace App\Services\pnr_management;

use App\Models\PnrDetail;
use App\Repositories\pnr_management\PnrRepo;
use Illuminate\Support\Facades\Log;

class PnrService
{
    protected $pnrRepo;
    /**
     * Create a new class instance.
     */
    public function __construct(PnrRepo $pnrRepo)
    {
        $this->pnrRepo = $pnrRepo;
    }
    

    public function addPnr($data)
    {
        $pnrData = $data['data'] ?? $data;

        $pnrData['available_seat']  = $pnrData['total_seat'] ?? 0;
        // $prnDataArray = [
        //     'pnr_code'        => $pnrData['pnrCode'] ?? 'null',
        //     'pnr_date'        => $pnrData['pnrDate'] ?? 'null',
        //     'airline'         => $pnrData['airlineName'] ?? 'null',
        //     'total_seat'      => $pnrData['pnrSeats'] ?? 0,
        //     'available_seat'  => $pnrData['pnrSeats'] ?? 0,
        //     'city'            => $pnrData['cityName'] ?? 'null',
        //     'delete_status'   => 1
        // ];
        
       
        try{
            
            return $this->pnrRepo->addPnr($pnrData);
            Log::info('PNR Inserted Successfully');
        }
        catch(\Exception $e){
            Log::error('PNR Insertion Error: '.$e->getMessage());
            return $e->getMessage();
            
        }
    }

    public function getPnrs()
    {
        return $this->pnrRepo->getPnrs();
    }

}
