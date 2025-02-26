<?php

namespace App\Repositories\pnr_management;

use App\Models\PnrDetail;

class PnrRepo
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function addPnr($data)
    {
       
        PnrDetail::create($data);
        return $data;
    }

    public function getPnrs()
    {
        return PnrDetail::where('delete_status', 1)->get();
    }
}
