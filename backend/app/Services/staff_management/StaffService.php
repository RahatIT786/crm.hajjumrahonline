<?php

namespace App\Services\staff_management;
use App\Repositories\staff_management\StaffRepo;

class StaffService
{
    protected $staffRepo;
    /**
     * Create a new class instance.
     */
    public function __construct(StaffRepo $staffRepo)
    {
        $this->staffRepo=$staffRepo;
    }

    public function createStaff(array $data){
        return $this->staffRepo->createStaff($data);
    }
}
