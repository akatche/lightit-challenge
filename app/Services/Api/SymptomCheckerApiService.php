<?php

namespace App\Services\Api;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class SymptomCheckerApiService
{
    public function getApiAuthToken() : string {
        if (Cache::has('symptom-checker-token')) {
            return Cache::get('symptom-checker-token');
        }

        $loginUrl = config('services.api_medic.auth_service_url') . '/login';

        $response = Http::withHeaders([
            'Authorization' => sprintf(
                'Bearer %s:%s',
                config('services.api_medic.api_key'),
                base64_encode(hash_hmac ( 'md5' , $loginUrl , config('services.api_medic.secret_key'), true ))
            ),
        ])->post($loginUrl);

        $data = $response->json();

        return Cache::remember('symptom-checker-token', $data['ValidThrough'], function () use($data) {
            return $data['Token'];
        });
    }

}
