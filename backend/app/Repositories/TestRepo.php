<?php
namespace App\Repositories;

use App\Interfaces\TestInterface;
use App\Models\DepartureCity;

class TestRepo 
{
    public function getAll(){
        return DepartureCity::where('delete_status',1)->get();
    }

    public function findById($id){
        return DepartureCity::findOrFail($id);
    }

    public function create(array $data){
        return DepartureCity::create($data);
    }

    public function update($id, array $data){
        $oldCity=DepartureCity::findOrFail($id);
        $oldCity->update($data);
        return $oldCity;
    }

    public function delete($id){
        return DepartureCity::destroy($id);
    }


}

?>
