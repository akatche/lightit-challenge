<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;


class ApiMedic extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function symptoms()
    {
        $data = Cache::remember('api-medic-symptoms',now()->addHour(),function () {
            $data = Http::apimedic()->get('symptoms');
            return $data->json();
        });

        return response()->json([
            'data' => $data
        ]);
    }
}
