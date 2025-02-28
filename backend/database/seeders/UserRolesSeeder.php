<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB as FacadesDB;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'Admin', 'delete_status' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Manager', 'delete_status' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'User', 'delete_status' => 1, 'created_at' => now(), 'updated_at' => now()],
        ];

        FacadesDB::table('user_roles')->insert($roles);
    }
}
