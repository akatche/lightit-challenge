<?php

namespace App\Console\Commands;

use App\Http\Controllers\Api\ApiMedic;
use Illuminate\Console\Command;

class WarmUpApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:warm-up-app';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Warm up the application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        (new ApiMedic())->symptoms();
    }
}
