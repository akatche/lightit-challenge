<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\ApiErrorException;
use App\Http\Controllers\Controller;
use App\Http\Requests\SymptomSearchRequest;
use App\Models\Diagnose;
use App\Models\User;
use App\Models\UserSymptomsSearch;
use Illuminate\Http\JsonResponse;
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

            return collect($response->json())->map(function (array $symptom) {
                return [
                    'id' => $symptom['ID'],
                    'name' => $symptom['Name']
                ];
            });
        });

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Get possible diagnoses for a symptom or list of symptoms
     */
    public function diagnoses(SymptomSearchRequest $request)
    {
        $user = $request->user();
        $validatedRequest = $request->safe()->only('symptoms');
        $symptoms = collect($validatedRequest['symptoms'])->map(fn($symptom)=>$symptom['id'])->toArray();

        $symptomsCacheName = sprintf('api-medic-symptoms-%s-%s',$user->id,implode('-',Arr::sort($symptoms)));

        $diagnoses = Cache::remember($symptomsCacheName,now()->addHour(),function () use($user,$symptoms) {
            $response = Http::apimedic()->get('diagnosis',[
                'symptoms' => json_encode($symptoms),
                'gender' => $user->birth_sex,
                'year_of_birth' => $user->birth_date->year
            ]);
            if($response->failed()){
                throw new ApiErrorException('Failed to fetch diagnoses list');
            }
            return $response->json();
        });

        $search = $this->saveHistoricData($user,$validatedRequest['symptoms'],$diagnoses);

        return response()->json([
            'data' => $search->diagnoses
        ]);
    }

    private function saveHistoricData(User $user,array $symptoms, array $diagnoses) : UserSymptomsSearch{
        $newSearch = UserSymptomsSearch::create([
            'user_id' => $user->id,
            'symptoms' =>  collect($symptoms)->map(fn($symptom)=>$symptom['name'])
        ]);

        foreach ($diagnoses as $diagnosis){
            Diagnose::create([
                'user_symptoms_search_id' => $newSearch->id,
                'name' => $diagnosis['Issue']['Name'],
                'accuracy' => $diagnosis['Issue']['Accuracy'],
                'specialists' => collect($diagnosis['Specialisation'])->map(fn($specialist)=>$specialist['Name'])
            ]);
        }

        return $newSearch;
    }

    /**
     * Updates a diagnose
     */
    public function isDiagnoseCorrect(Diagnose $diagnose): JsonResponse
    {
        $this->authorize('update', $diagnose);

        $diagnose->update([
            'correct' => request('reply')
        ]);

        return response()->json([
            'response' => true
        ]);
    }
}
