<?php

namespace LaravelWay\JsTranslate\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class ClearCacheCommand extends Command
{
    protected $signature = 'jstranslate:clear-cache';

    protected $description = 'Clear cached translation files and cache';

    public function handle(): void
    {
        $this->info('Clearing cached translation files and cache...');

        @unlink(public_path(config('jstranslate.translate_script_path')));

        $pattern = str_replace('{lang}', '*', config('jstranslate.translations_path'));
        foreach(glob(public_path($pattern)) as $file) {
            $filename = basename($file);
            $parts = explode('.', $filename);
            $lang = $parts[1] ?? 'en';

            @unlink($file);
            Cache::forget("jstranslations.{$lang}.js"); // todo: maybe better to change caching via tags
        }

        $this->info('Cached translation files and cache cleared!');
    }
}
