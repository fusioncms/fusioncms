<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Foundation\Traits;

use Illuminate\Support\Facades\Schema;

trait DatabaseAssertions
{
    protected function assertDatabaseHasTable($table)
    {
        $this->assertTrue(Schema::hasTable($table));

        return $this;
    }

    protected function assertDatabaseDoesNotHaveTable($table)
    {
        $this->assertFalse(Schema::hasTable($table));

        return $this;
    }

    protected function assertDatabaseTableHasColumn($table, $column)
    {
        $this->assertTrue(Schema::hasColumn($table, $column));

        return $this;
    }

    protected function assertDatabaseTableDoesNotHaveColumn($table, $column)
    {
        $this->assertFalse(Schema::hasColumn($table, $column));

        return $this;
    }
}
