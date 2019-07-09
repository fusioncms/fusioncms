<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs;

use Module;
use App\Models\Notification;

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
