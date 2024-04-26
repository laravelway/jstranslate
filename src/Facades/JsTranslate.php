<?php

namespace LaravelWay\JsTranslate\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \LaravelWay\JsTranslate\JsTranslate
 */
class JsTranslate extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \LaravelWay\JsTranslate\JsTranslate::class;
    }
}
