<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PublishModules extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:link';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish any publishable assets from module packages';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->links() as $link => $target) {
            if (file_exists($link)) {
                $this->error("The [$link] link already exists.");
            } else {
                $this->laravel->make('files')->link($target, $link);

                $this->info("The [$link] link has been connected to [$target].");
            }
        }
    }

    /**
     * Get the list of symbolic links and their source.
     *
     * @return array
     */
    protected function links()
    {
        return $this->laravel['modules']->all()->mapWithKeys(function($item) {
            $link   = public_path("modules/{$item['slug']}");
            $source = base_path("modules/{$item['basename']}/public");

            return [ $link => $source ];
        });
    }
}
