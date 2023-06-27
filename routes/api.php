<?php

use App\Http\Controllers\Api\ApiMedic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/symptoms', [ApiMedic::class,'symptoms'])->name('api.symptoms');
    Route::post('/diagnoses', [ApiMedic::class,'diagnoses'])->name('api.diagnoses');
    Route::patch('/diagnoses/{diagnose}/correct', [ApiMedic::class,'isDiagnoseCorrect'])->name('api.diagnoses.correct');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/db-migrate/{code}', function ($code) {

    Artisan::call('migrate', ['--force' => true]);

    return "hola";
});
