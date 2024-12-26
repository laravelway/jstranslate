<?php

namespace LaravelWay\JsTranslate\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use JsonException;
use LaravelWay\JsTranslate\Actions\JsTranslateScriptGenerate;
use LaravelWay\JsTranslate\Actions\JsTranslationGenerate;

class CacheCommand extends Command
{
    protected $signature = 'jstranslate:cache';

    protected $description = 'Cache translation files';

    public function handle(): void
    {
        $this->clearCache();
        $this->cache();

        $this->info('Complete!');
    }

    private function clearCache(): void
    {
        $this->info('Clear cached translation files and cache...');

        @unlink(public_path(config('jstranslate.translate_script_path')));

        $pattern = str_replace('{lang}', '*', config('jstranslate.translations_path'));
        foreach (glob(public_path($pattern)) as $file) {
            $filename = basename($file);
            $parts = explode('.', $filename);
            $lang = $parts[1] ?? 'en';

            @unlink($file);
            Cache::forget("jstranslations.{$lang}.js"); // todo: maybe better to change caching via tags
        }
    }

    /**
     * @throws JsonException
     */
    private function cache(): void
    {
        $this->info('Caching translation files ...');

        (new JsTranslateScriptGenerate)->handle();
        (new JsTranslationGenerate)->handle('en');
    }
}
