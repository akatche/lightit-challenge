<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Cache\RateLimiter;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;


class ApiMedic extends Controller
{
    /**
     * Get a list of all available symptoms
     */
    public function symptoms()
    {
        $data = Cache::remember('api-medic-symptoms',now()->addHour(),function () {
            $data = Http::apimedic()->get('symptoms');

            //Increment API transactions made
            RateLimiter::hit('api-medic');

            return $data->json();
        });

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Get possible diagnoses for a symptom or list of symptoms
     */
    public function diagnoses(Request $request)
    {

        $userID = 10;
        $symptoms = [16,23];
        $gender  = 'male';
        $year_of_birth = 1985;

        $symptomsCacheName = sprintf('api-medic-symptoms-%s-%s',$userID,implode('-',Arr::sort($symptoms)));

        $diagnoses = Cache::remember($symptomsCacheName,now()->addHour(),function () use($symptoms,$gender,$year_of_birth) {
            $data = Http::apimedic()->get('diagnosis',[
                'symptoms' => json_encode($symptoms),
                'gender' => $gender,
                'year_of_birth' => $year_of_birth
            ]);

            //Increment API transactions made
            RateLimiter::hit('api-medic');

            return $data->json();
        });

        return response()->json([
            'data' => $diagnoses
        ]);
    }
}
