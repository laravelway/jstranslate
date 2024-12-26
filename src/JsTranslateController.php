<?php

namespace LaravelWay\JsTranslate;

use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use JsonException;
use LaravelWay\JsTranslate\Actions\JsTranslateScriptGenerate;
use LaravelWay\JsTranslate\Actions\JsTranslationGenerate;

class JsTranslateController extends Controller
{
    public function script(): Response
    {
        $jsFileContent = (new JsTranslateScriptGenerate)->handle();

        return response($jsFileContent)->header('Content-Type', 'text/javascript');
    }

    /**
     * @throws JsonException
     */
    public function translations(string $lang): Response
    {
        $content = (new JsTranslationGenerate)->handle($lang);

        return response($content)->header('Content-Type', 'text/javascript');
    }
}
