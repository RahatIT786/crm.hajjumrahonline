<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiKeyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = $request->header('X-API-KEY');
        $validKey = env('API_KEY');  // Store API Key in .env

        if (!$apiKey || $apiKey !== $validKey) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }


        return $next($request);
    }
}
