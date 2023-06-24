<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;


class ApiMedic extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function symptoms()
    {
        $test = Http::apimedic()->get('symptoms',[
            'symptoms' => json_encode([45])
        ]);

        return $test->json();
    }
}
