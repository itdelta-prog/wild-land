<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ProxyController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $request->validate([
            'url' => 'required',
        ]);

        $body = Http::post($request->get('url'), $request->except('url'))
            ->body();

        $body = json_decode($body);

        return response()->json($body);
    }
}
