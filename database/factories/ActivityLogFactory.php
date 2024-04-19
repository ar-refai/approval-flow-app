<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ActivityLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
            'action' => fake()->sentence(),
            'entity_type' => fake()->randomElement(['RequestCreation','RequestFullfiled','RequestRejected','RequestAccepted', 'User-Creation']),
            'entity_id' => fake()->numberBetween(1, 100),
            'details' => fake()->text(),
            'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
        ];
    }
}
