<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Illuminate\Http\Client\Request;

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

        // We test that the cache was used twice, it means the following,
        // the first time when we set the cached values
        // and the second time when we used its values
        Cache::shouldReceive('remember')
            ->twice()
            ->with('api-medic-symptoms', 3600, \Closure::class)
            ->andReturn($symptoms);

        // First Api call
        $firstResponse = $this->getJson('/api/symptoms');

        $firstResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => $symptoms,
            ]);

        // Second Api call
        $secondResponse = $this->getJson('/api/symptoms');

        $secondResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => $symptoms,
            ]);
    }
}
