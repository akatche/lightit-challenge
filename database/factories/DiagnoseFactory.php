<?php

namespace Database\Factories;

use App\Models\UserSymptomsSearch;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Diagnose>
 */
class DiagnoseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_symptoms_search_id' => UserSymptomsSearch::factory()->create(),
            'name' => fake()->randomElement(['Reflux disease','Cold','Flu']),
            'accuracy' => fake()->numberBetween(0,100),
            'specialists' => fake()->randomElements(['General practice', 'Psychiatry', 'Otolaryngology']),
        ];
    }

    /**
     * Indicate that the diagnose is correct
     */
    public function correct(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'correct' => true,
            ];
        });
    }
}
