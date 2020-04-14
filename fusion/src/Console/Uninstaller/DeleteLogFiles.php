<?php

namespace Fusion\Console\Uninstaller;

class DeleteLogFiles
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
    	if (! empty(glob(storage_path('logs/*.log')))) {
        	exec('rm ' . storage_path('logs/*.log'));
    	}
    }
}
