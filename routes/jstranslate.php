<?php

use Illuminate\Support\Facades\Route;
use LaravelWay\JsTranslate\JsTranslateController;

Route::get('jstranslations', JsTranslateController::class)->name('js.translations');
