<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;


class SymptomChecker extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $test = Http::apimedic()->get('symptoms',[
            'symptoms' => json_encode([45]),
            'language' => 'es-es',
        ]);

        return $test->json();
    }
}
