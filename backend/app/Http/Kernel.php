<?php 



// protected $middleware = [
//     // Other middleware
//     // \App\Http\Middleware\CorsMiddleware::class,
// ];

// // app/Http/Kernel.php

// protected $routeMiddleware = [
//     // Other middlewares...
//     // 'api.key' => \App\Http\Middleware\ApiKeyMiddleware::class,
// ];

protected $middlewareGroups = [
    // 'web' => [
    //     \App\Http\Middleware\VerifyCsrfToken::class, // ✅ Keep CSRF for web routes
    // ],
    // 'api' => [
    //     \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class, // (only if using Sanctum)
    //     'throttle:api',
    //     \Illuminate\Routing\Middleware\SubstituteBindings::class,

    //     \App\Http\Middleware\CorsMiddleware::class,
    // ],
    'api' => [
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
    \App\Http\Middleware\CorsMiddleware::class,
],

];













