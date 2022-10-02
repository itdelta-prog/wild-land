<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\View\View as ViewInstance;

class ViewServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        View::composer('*', function (ViewInstance $view): void {
            $view->with('authUser', auth()->user());
        });
    }

    public function boot(): void
    {
        //
    }
}
