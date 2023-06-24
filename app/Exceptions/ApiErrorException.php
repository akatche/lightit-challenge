<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;

class ApiErrorException extends Exception
{
    public function render(Request $request): \Illuminate\Http\JsonResponse|bool
    {
        if ( $request->is('api/*')) {
            return response()->json([
                'message' => $this->getMessage()
            ], 404);
        }

        return false;
    }
}
