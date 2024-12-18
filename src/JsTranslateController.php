<?php

namespace LaravelWay\JsTranslate;

use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use JsonException;

class JsTranslateController extends Controller
{
    /**
     * @throws JsonException
     */
    public function script(): Response
    {
        $jsFileContent = file_get_contents(base_path('/vendor/laravelway/jstranslate/dist/translate.js'));

        $filePath = config('jstranslate.translate_script_path');
        file_put_contents(public_path($filePath), $jsFileContent);

        return response($jsFileContent)->header('Content-Type', 'text/javascript');
    }

    /**
     * @throws JsonException
     */
    public function translations(string $lang): Response
    {
        $files = config('jstranslate.files', []);

        $files = collect($files)
            ->map(fn ($file) => lang_path("{$lang}/{$file}.php"))
            ->add(lang_path("{$lang}.json"));

        $strings = Cache::remember("jstranslations.{$lang}.js", now()->addHour(), static function () use ($files) {
            $strings = [
                '__possible_keys' => [],
            ];

            foreach ($files as $file) {
                if (! file_exists($file)) {
                    continue;
                }
                if (Str::endsWith($file, '.json')) {
                    $name = '__global';
                    $content = json_decode(file_get_contents($file), false, 512, JSON_THROW_ON_ERROR);
                } else {
                    $name = basename($file, '.php');
                    $strings['__possible_keys'][] = $name;
                    $content = require $file;
                }

                $strings[$name] = $content;
                unset($name);
            }

            return $strings;
        });

        $encoded = json_encode(
            $strings,
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_LINE_TERMINATORS
            | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_IGNORE
        );

        $content = <<<JS
if (window.i18n === undefined) {
    window.i18n = {};
}

window.i18n['$lang'] = $encoded;
JS;

        $filePath = config('jstranslate.translations_path');
        $filePath = str_replace('{lang}', $lang, $filePath);

        file_put_contents(public_path($filePath), $content);

        return response($content)->header('Content-Type', 'text/javascript');
    }
}
