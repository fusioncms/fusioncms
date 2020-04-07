<?php


namespace Fusion\Jobs;

use Module;
use Fusion\Models\Notification;

class SyncSystemNotifications
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $modules = Module::all();

        foreach ($modules as $key => $module) {
            if (isset($module['notifications'])) {
                $this->createNotifications($module['notifications']);
            }
        }
    }

    protected function createNotifications($notifications)
    {
        foreach ($notifications as $notification => $details) {
            $exists = Notification::where('handle', $notification)->first();

            if (! $exists) {
                Notification::create([
                    'name'        => $details['name'],
                    'handle'      => $notification,
                    'description' => $details['description'],
                    'permissions' => $details['permissions'],
                ]);
            }
        }
    }
}
