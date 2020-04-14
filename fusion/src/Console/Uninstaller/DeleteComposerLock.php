<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteComposerLock
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::delete(base_path('composer.lock'));
    }
}
