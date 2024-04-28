<?php

namespace LaravelWay\JsTranslate;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class JsTranslateController extends Controller
{
    public function __invoke()
    {
        $lang = config('app.locale');
        $files = config('jstranslate.files', []);

        $files = collect($files)
            ->map(fn ($file) => base_path("lang/{$lang}/{$file}.php"))
            ->add(base_path("lang/{$lang}.json"));

        $strings = Cache::remember(
            "jstranslations.{$lang}.js",
            now()->addHours(1),
            static function () use ($lang, $files) {
                $strings = [
                    '__possible_keys' => []
                ];
                foreach ($files as $file) {
                    if (Str::endsWith($file, '.json')) {
                        if (file_exists($file)) {
                            $name = '__global';
                            $content = json_decode(file_get_contents($file));
                        }
                    } else {
                        if (file_exists($file)) {
                            $name = basename($file, '.php');
                            $strings['__possible_keys'][] = $name;
                            $content = require $file;
                        }
                    }

                    if (isset($name)) {
                        $strings[$name] = $content;
                        unset($name);
                    }
                }

                return $strings;
            });

        $encoded = json_encode($strings, JSON_THROW_ON_ERROR | JSON_UNESCAPED_LINE_TERMINATORS
            | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_IGNORE);

        $jsFileContent = file_get_contents(base_path('/vendor/laravelway/jstranslate/dist/bundle.js'));

        $content = <<<JS
window.i18n = $encoded;
$jsFileContent
JS;

        return response($content)->header('Content-Type', 'text/javascript');
    }
}
