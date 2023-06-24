<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\ApiErrorException;
use App\Http\Controllers\Controller;
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
        $data = Cache::remember('api-medic-symptoms',60*60,function () {
            $response = Http::apimedic()->get('symptoms');

            if($response->failed()){
                throw new ApiErrorException('Failed to fetch symptoms list');
            }

            return $response->json();
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
            $response = Http::apimedic()->get('diagnosis',[
                'symptoms' => json_encode($symptoms),
                'gender' => $gender,
                'year_of_birth' => $year_of_birth
            ]);
            if($response->failed()){
                throw new ApiErrorException('Failed to fetch diagnoses list');
            }
            return $response->json();
        });

        return response()->json([
            'data' => $diagnoses
        ]);
    }
}
