<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Crmuser extends User implements JWTSubject
{
    
    use HasFactory;

    protected $hidden = [
        'password',
        'remember_token',
        'updated_at',
        'created_at',
        'delete_status'
    ];
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id'
    ];


    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            'role'=>$this->role_id
        ];
    }




    public function userRole(){
        return $this->belongsTo(userRole::class);
    }
}
