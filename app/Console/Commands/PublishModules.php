<?php

namespace App\Console\Commands;

use App\Models\Extension;
use Illuminate\Support\Str;
use App\Concerns\HasExtension;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class PublishModules extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:link {--module=}';

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
        $this->modules()->each(function($item) {

            // publish assets..
            $this->symlink(
                public_path("modules/{$item['slug']}"),
                base_path("modules/{$item['basename']}/public")
            );

            // publish settings..
            $this->symlink(
                base_path("settings/modules/{$item['slug']}.php"),
                base_path("modules/{$item['basename']}/resources/{$item['slug']}.php")
            );

            // generate extensions..
            $this->extension($item);
        });
    }

    /**
     * Generate Extension for Models using `HasExtension`.
     * 
     * @param  array  $module
     * @return void
     */
    protected function extension(array $module)
    {
        $files = File::files(base_path("modules/{$module['basename']}/src/Models"));
        
        foreach ($files as $file) {
            $name   = basename($file->getBaseName(), '.php');
            $model  = resolve("Modules\\{$module['basename']}\\Models\\{$name}");
            $traits = class_uses($model);

            if (in_array(HasExtension::class, $traits)) {
                Extension::firstOrCreate([
                    'name'   => Str::studly($model->getTable()),
                    'handle' => $model->getTable(),
                ]);
            }
        }
    }

    /**
     * Get modules for publishing.
     * 
     * @return \Illuminate\Support\Collection
     */
    protected function modules()
    {
        $modules = $this->laravel['modules']->all();

        if ($this->option('module')) {
            $modules = $modules->where('slug', $this->option('module'));
        }

        return $modules;
    }

    /**
     * Create symlink.
     *
     * @return array
     */
    protected function symlink($link, $target)
    {
        if (file_exists($link)) {
            $this->error("The [$link] link already exists.");
        } else {
            $this->laravel->make('files')->link($target, $link);

            $this->info("The [$link] link has been connected to [$target].");
        }
    }
}
