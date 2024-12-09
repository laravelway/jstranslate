<?php

use Illuminate\Support\Facades\Route;
use LaravelWay\JsTranslate\JsTranslateController;
use LaravelWay\JsTranslate\MissingTranslationsController;

Route::get(config('jstranslate.translate_script_path'), [JsTranslateController::class, 'script'])
    ->name('translate.js');

Route::get(config('jstranslate.translations_path'), [JsTranslateController::class, 'translations'])
    ->name('translations.js')
    ->where('lang', '[a-z]{2}');
