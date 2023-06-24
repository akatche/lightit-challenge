<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Api\SymptomCheckerApiService;
use Illuminate\Http\Request;


class SymptomChecker extends Controller
{
    private $api;

    public function __construct(SymptomCheckerApiService $api)
    {
        $this->api = $api->authorizedApi();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $token = $this->api->get('');

        return $token;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
