<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Database\Schema;

use Illuminate\Database\Schema\Blueprint as IlluminateBlueprint;

class Blueprint extends IlluminateBlueprint
{
    /**
     * Store the unique ID's of the users who created or updated the record.
     *
     * @return void
     */
    public function authors()
    {
        $this->integer('created_by')->unsigned()->nullable();
        $this->integer('updated_by')->unsigned()->nullable();

        $this->foreign('created_by')->references('id')->on('users')->onDelete('set null');
        $this->foreign('updated_by')->references('id')->on('users')->onDelete('set null');
    }

    /**
     * Add nullable publish and expire timestamps to the table.
     *
     * @return void
     */
    public function publishes()
    {
        $this->timestamp('publish_at')->nullable();

        $this->timestamp('expire_at')->nullable();
    }
}
