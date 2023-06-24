<?php

namespace App\Providers;

use App\Services\Api\ApiMedicService;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Http::macro('apimedic', function () {

            $apiToken = (New ApiMedicService())->getApiAuthToken();

            return Http::withToken($apiToken)
                ->baseUrl(config('services.api_medic.health_service_url'))
                ->withOptions([
                    'query' => [
                        'token' => $apiToken,
                        'language' => 'es-es'
                    ]
                ]);
        });
    }
}
