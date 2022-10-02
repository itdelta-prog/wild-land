<?php

use Domain\Page\Repositories\PageRepository;
use Support\WeservImages\WeservImages;

if (!function_exists('weserv')) {
    function weserv(string $imageUrl): WeservImages
    {
        return WeservImages::make($imageUrl);
    }
}

if (!function_exists('pages')) {
    function pages(): PageRepository
    {
        return app(PageRepository::class);
    }
}
