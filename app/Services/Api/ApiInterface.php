<?php

namespace App\Services\Api;

use Illuminate\Http\Client\PendingRequest;

interface ApiInterface
{
    public function authorizedApi() : PendingRequest;
}
