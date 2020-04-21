<?php

namespace Fusion\Console;

use File;
use Artisan;
use Illuminate\Support\Str;
use Fusion\Models\Extension;
use Illuminate\Console\Command;
use Fusion\Concerns\HasExtension;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class SyncCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:sync {--module=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync FusionCMS themes, modules and settings';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            dispatch(new \Fusion\Console\Actions\SyncSettings);

            $this->modules()->each(function($item) {
                // publish assets..
                $this->symlink(
                    public_path("modules/{$item['slug']}"),
                    base_path("modules/{$item['basename']}/public")
                );

                // publish settings..
                $this->symlink(
                    fusion_path("/settings/modules/{$item['slug']}.php"),
                    base_path("modules/{$item['basename']}/settings.php")
                );

                // generate extensions..
                $this->extension($item);
            });
        } catch (Exception $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

            $this->comment("\n\nUh oh! The following error was encountered during the sync process:\n");
            $this->error($exception->getMessage());
            $this->comment("\nPlease check the error logs for more information.");

            return;
        }

        return $this->info("\nFusionCMS is now in sync.");
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
        } elseif (! file_exists($target)) {
            $this->error("The [$target] link doesn't exists.");
        } else {
            $this->laravel->make('files')->link($target, $link);

            $this->info("The [$link] link has been connected to [$target].");
        }
    }
}