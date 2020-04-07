<?php


namespace Fusion\Jobs\Upgrader;

use File;
use Symfony\Component\Yaml\Yaml;

class CleanUpFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $this->cleanUpDeprecatedFiles();

        $this->cleanUpTemporaryFiles();
    }

    /**
     * Delete the specified files and directories that are
     * no longer needed.
     *
     * @return null
     */
    protected function cleanUpDeprecatedFiles()
    {
        $version  = app_version();
        $manifest = Yaml::parse(File::get(base_path('bootstrap/releases/' . $version . '.yaml')));

        if (isset($manifest['removed'])) {
            foreach ($manifest['removed'] as $file) {
                $this->delete($file);
            }
        }
    }

    /**
     * Clean up the temporary downloaded files from the update
     * process.
     *
     * @return null
     */
    protected function cleanUpTemporaryFiles()
    {
        // Nuke the entire site from orbit
        // It's the only way to be sure
        File::deleteDirectory(storage_path('temp'));
    }

    /**
     * Delete the given file or directory.
     *
     * @param  string  $path
     * @return null
     */
    protected function delete($path)
    {
        if (File::exists($path)) {
            $type = File::type($path);

            switch ($type) {
                case 'file':
                    File::delete(base_path($path));
                    break;
                case 'dir':
                    File::deleteDirectory(base_path($path));
                    break;
            }
        }
    }
}
