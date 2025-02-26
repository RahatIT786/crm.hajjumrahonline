<?php 



protected $middleware = [
    // Other middleware
    \App\Http\Middleware\CorsMiddleware::class,
];

// app/Http/Kernel.php

protected $routeMiddleware = [
    // Other middlewares...
    'api.key' => \App\Http\Middleware\ApiKeyMiddleware::class,
];












