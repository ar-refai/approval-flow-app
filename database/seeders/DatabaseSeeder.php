<?php

namespace Database\Seeders;

use App\Models\Request;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $purchaser = User::factory()->create([
            'name' => 'abdelrahman',
            'email' => 'team.man00@gmail.com',
            'password' => bcrypt('123456789'),
            'role' => 'requester' ,
            'email_verified_at' =>time()
        ]);
        Request::factory()->count(50)->create(['user_id' => $purchaser->id]);
    }
}
