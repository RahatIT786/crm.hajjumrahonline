<?php

namespace App\Providers;

use App\Repositories\staff_management\RoleRepo;
use App\Repositories\TestRepo;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Log::info('Binding TestRepo');
        $this->app->bind(TestRepo::class);
    
        Log::info('Binding RoleRepo');
        $this->app->bind(RoleRepo::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
