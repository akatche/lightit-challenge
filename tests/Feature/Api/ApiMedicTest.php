<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Closure;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ApiMedicTest extends TestCase
{
    use RefreshDatabase;

    public string $apiLoginEndpoint;
    public string $apiHealthEndpoint;

    protected function setUp(): void
    {
        parent::setUp();
        $this->apiLoginEndpoint =  config('services.api_medic.auth_service_url');
        $this->apiHealthEndpoint =  config('services.api_medic.health_service_url');
    }

    /**
     * A basic feature test example.
     */
    public function test_symptoms_list_can_be_fetched(): void
    {
        $symptoms = [
            [
                "ID" =>  45,
                "Name" =>  "Acidez"
            ],
            [
                "ID" =>  46,
                "Name" =>  "Cansancio"
            ]
        ];

        Http::fake([
            "$this->apiLoginEndpoint/*" => Http::response([
                'ValidThrough' => 7200,
                'Token' => 'abdc'
            ]),

            "$this->apiHealthEndpoint/*" => Http::response($symptoms),
        ]);

        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );

        Cache::shouldReceive('remember')
            ->once()
            ->with('api-medic-symptoms', 3600, \Closure::class)
            ->andReturn($symptoms);

        $response = $this->get('/api/symptoms');

        $response->assertStatus(200);
    }
}
