<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Request>
 */
class RequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'item_name' => fake()->sentence(),
            'user_id' => fake()->numberBetween(0,3),
            'description' => fake()->realText(),
            'quantity'=> fake()->numberBetween(5,500),
            'status' => fake()->randomElement(['fulfilled', 'accepted', 'pending',  'rejected', 'stalled',  'inprogress']),

        ];
    }
}
