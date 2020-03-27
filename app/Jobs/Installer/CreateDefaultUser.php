<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Installer;

use Shinobi;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateDefaultUser
{
    /**
     * @var array
     */
    protected $container;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
        $this->container = $container;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        activity()->disableLogging();
        
        $user = User::create([
            'name'              => $this->container['user_name'],
            'email'             => $this->container['user_email'],
            'password'          => Hash::make($this->container['user_password']),
            'status'            => true,
            'email_verified_at' => now(),
        ]);

        Shinobi::assign('admin')->to($user);
    }
}
