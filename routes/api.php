<?php

use App\Http\Controllers\Api\ApiMedic;
use Illuminate\Http\Request;
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

Route::get('/symptoms', [ApiMedic::class,'symptoms']);
Route::get('/diagnoses', [ApiMedic::class,'diagnoses']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
