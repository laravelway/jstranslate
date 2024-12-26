<?php

namespace LaravelWay\JsTranslate\Actions;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use JsonException;

class JsTranslationGenerate
{
    /**
     * @throws JsonException
     */
    public function handle(string $lang): string
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

        $contentJs = <<<JS
        window.setTranslations($encoded, '$lang');
        window.dispatchEvent(new CustomEvent("translations:loaded", {detail: {locale: '$lang'}}));
JS;

        $contentMjs = <<<JS
        export const translations = $encoded;
JS;

        $filePath = config('jstranslate.translations_path');
        $filePath = str_replace('{lang}', $lang, $filePath);

        file_put_contents(public_path($filePath), $contentJs);

        $filePath = str_replace('.js', '.mjs', $filePath);
        file_put_contents(public_path($filePath), $contentMjs);

        return $contentJs;
    }
}
