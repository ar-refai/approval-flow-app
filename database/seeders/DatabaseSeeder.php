<?php

namespace Database\Seeders;

use App\Models\ActivityLog;
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

        $requester = User::factory()->create([
            'name' => 'boda',
            'email' => 'team.man0@yahoo.com',
            'password' => bcrypt('123456789'),
            'role' => 'admin' ,
            'email_verified_at' =>time()
        ]);
        $requester2 = User::factory()->create([
            'name' => 'abdelrahman',
            'email' => 'team.man00@gmail.com',
            'password' => bcrypt('123456789'),
            'role' => 'purchaser' ,
            'email_verified_at' =>time()
        ]);
        $requester3 = User::factory()->create([
            'name' => 'sami',
            'email' => 'sami@gmail.com',
            'password' => bcrypt('123456789'),
            'role' => 'treasury' ,
            'email_verified_at' =>time()
        ]);
        $requester4 = User::factory()->create([
            'name' => 'sadik',
            'email' => 'sadik@gmail.com',
            'password' => bcrypt('123456789'),
            'role' => 'requester' ,
            'email_verified_at' =>time()
        ]);
        Request::factory()->count(10)->create(['user_id' => $requester->id]);
        Request::factory()->count(10)->create(['user_id' => $requester2->id]);
        Request::factory()->count(10)->create(['user_id' => $requester3->id]);
        Request::factory()->count(10)->create(['user_id' => $requester4->id]);
        // ActivityLog::factory()->count(30)->create(['user_id' => $requester->id]);

    }
}
