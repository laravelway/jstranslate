<?php

namespace LaravelWay\JsTranslate\Actions;

class JsTranslateScriptGenerate
{
    public function handle(): string
    {
        $jsFileContent = file_get_contents(base_path('/vendor/laravelway/jstranslate/dist/translate.umd.js'));

        $filePath = config('jstranslate.translate_script_path');
        file_put_contents(public_path($filePath), $jsFileContent);

        return $jsFileContent;
    }
}
