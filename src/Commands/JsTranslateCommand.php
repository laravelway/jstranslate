<?php

namespace LaravelWay\JsTranslate\Commands;

use Illuminate\Console\Command;

class JsTranslateCommand extends Command
{
    public $signature = 'jstranslate';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
