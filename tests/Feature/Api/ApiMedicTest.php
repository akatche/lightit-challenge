<?php

namespace Tests\Feature\Api;

use App\Models\Diagnose;
use App\Models\User;
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

    public function test_symptoms_list_returns_well_formatted_error_when_api_auth_fails(): void
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
            ],401),

            "$this->apiHealthEndpoint/*" => Http::response($symptoms),
        ]);

        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );

        // First Api call
        $firstResponse = $this->getJson('/api/symptoms');

        $firstResponse
            ->assertStatus(404)
            ->assertJson([
                'message' => 'ApiMedic auth failed',
            ]);
    }

    public function test_symptoms_list_returns_well_formatted_error_when_api_fetching_fails(): void
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

            "$this->apiHealthEndpoint/*" => Http::response($symptoms,401),
        ]);

        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );

        // First Api call
        $firstResponse = $this->getJson('/api/symptoms');

        $firstResponse
            ->assertStatus(404)
            ->assertJson([
                'message' => 'Failed to fetch symptoms list',
            ]);
    }

    public function test_diagnose_can_be_set_as_correct() : void{

        $diagnose = Diagnose::factory()->create();

        Sanctum::actingAs($diagnose->search->user, ['*']);

        $response = $this->patchJson("/api/diagnoses/$diagnose->id/correct",[
            'reply' => true
        ]);

        $response->assertOk();

        $this->assertTrue($diagnose->fresh()->correct);
    }

    public function test_diagnose_can_be_set_as_incorrect() : void{

        $diagnose = Diagnose::factory()->create();

        Sanctum::actingAs($diagnose->search->user, ['*']);

        $response = $this->patchJson("/api/diagnoses/$diagnose->id/correct",[
            'reply' => false
        ]);

        $response->assertOk();

        $this->assertFalse($diagnose->fresh()->correct);
    }

    public function test_diagnose_can_only_be_updated_by_the_user_show_created_it() : void{

        $diagnose = Diagnose::factory()->create();

        Sanctum::actingAs(
            User::factory()->create(),
            ['*']
        );

        $response = $this->patchJson("/api/diagnoses/$diagnose->id/correct",[
            'reply' => true
        ]);

        $response->assertForbidden();

        $this->assertEquals($diagnose->correct,$diagnose->fresh()->correct);
    }
}
