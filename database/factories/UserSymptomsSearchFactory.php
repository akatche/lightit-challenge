<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserSymptomsSearch>
 */
class UserSymptomsSearchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory()->create(),
            'symptoms' => fake()->randomElements(['Anxiety', 'Cold sweats','Abdominal pain','Fever', 'Earache', 'Back pain', 'Chest pain'])
        ];
    }
}
