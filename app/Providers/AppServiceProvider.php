<?php

namespace App\Providers;

use App\Services\MedicService;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\URL;
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

        if($this->app->environment('production')) {
            URL::forceScheme('https');
        };

        Http::macro('apimedic', function () {

            $apiToken = (New MedicService())->getApiAuthToken();

            return Http::withToken($apiToken)
                ->baseUrl(config('services.api_medic.health_service_url'))
                ->withOptions([
                    'query' => [
                        'token' => $apiToken,
                        'language' => 'en-gb'
                    ]
                ]);
        });
    }
}
