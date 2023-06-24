<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'api_medic' => [
        'api_key' => env('API_MEDIC_USERNAME'),
        'secret_key' => env('API_MEDIC_PASSWORD'),
        'auth_service_url' => env('API_MEDIC_AUTH_SERVICE'),
        'health_service_url' => env('API_MEDIC_HEALTH_SERVICE'),
        'allowed_trancactions' => env('API_MEDIC_ALLOWED_TRANSACTIONS')
    ]
];
