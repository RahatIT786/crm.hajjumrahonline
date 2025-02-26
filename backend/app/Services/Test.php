<?php 
namespace App\Services;

use App\Repositories\TestRepo;

class Test{
    protected $testRepo;
    public function __construct(TestRepo $testRepo){
        $this->testRepo=$testRepo;
    }



    public function getAllCity(){
      return  $this->testRepo->getAll();
    }











}
?>