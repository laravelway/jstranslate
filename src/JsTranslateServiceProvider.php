<?php

namespace LaravelWay\JsTranslate;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class JsTranslateServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('jstranslate')
            ->hasConfigFile('jstranslate')
            ->hasRoutes(['jstranslate']);
    }
}
