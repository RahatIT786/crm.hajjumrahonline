<?php
$requestUri = $_SERVER['REQUEST_URI'];

// Otherwise, route to Vue frontend
if ($requestUri === '/' || !file_exists(__DIR__ . '/frontend' . $requestUri)) {
    require __DIR__ . '/frontend/dist/index.html';
    exit;
}



// If the request is for API or backend, route to Laravel
if (strpos($requestUri, '/api/') === 0 || strpos($requestUri, '/backend/') === 0) {
    require __DIR__ . '/backend/public/index.php';
    exit;
}


// Serve static assets (CSS, JS, images) for Vue
return false;
?>
