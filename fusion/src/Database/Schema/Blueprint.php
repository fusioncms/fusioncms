<?php

namespace Fusion\Database\Schema;

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
        $this->unsignedBigInteger('created_by')->nullable();
        $this->unsignedBigInteger('updated_by')->nullable();

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
