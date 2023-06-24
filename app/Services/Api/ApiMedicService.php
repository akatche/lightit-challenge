<?php

namespace App\Services\Api;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ApiMedicService
{
    public function getApiAuthToken() : string {
        if (Cache::has('api-medic-auth-token')) {
            return Cache::get('api-medic-auth-token');
        }

        $loginUrl = config('services.api_medic.auth_service_url') . '/login';

        $response = Http::withHeaders([
            'Authorization' => sprintf(
                'Bearer %s:%s',
                config('services.api_medic.api_key'),
                base64_encode(hash_hmac ( 'md5' , $loginUrl , config('services.api_medic.secret_key'), true ))
            ),
        ])->post($loginUrl);


        if($response->failed()){
            throw new \Exception('ApiMedic auth failed');
        }

        $data = $response->json();

        return Cache::remember('api-medic-auth-token', $data['ValidThrough'], function () use($data) {
            return $data['Token'];
        });
    }

}
