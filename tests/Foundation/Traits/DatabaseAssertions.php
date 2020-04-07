<?php


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

    protected function assertDatabaseTableColumnHasType($table, $column, $type)
    {
        $columnType = Schema::getColumnType($table, $column);

        $this->assertEquals($columnType, $type);

        return $this;
    }
}
