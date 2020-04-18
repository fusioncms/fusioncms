<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Fusion\Models\Directory;
use Facades\DirectoryFactory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DirectoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group directories
     */
    public function each_directory_must_have_a_unique_parent_id_and_slug_combination()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: directories.parent_id, directories.slug');

        $directory = DirectoryFactory::withName('lorem')->create();
        $directory = $directory->toArray();
        $directory['id'] = null;

        DB::table('directories')->insert($directory);
    }

    /**
     * @test
     * @group unit
     * @group directories
     */
    public function directories_can_have_non_unique_parent_id_or_slug_seperately()
    {
        $directory = DirectoryFactory::withName('lorem')->create();

        $directoryOne = $directory->toArray();
        $directoryOne['id']   = null;
        $directoryOne['slug'] = 'new-slug';

        $directoryTwo = $directory->toArray();
        $directoryTwo['id']     = null;
        $directoryTwo['parent_id'] = 99;

        DB::table('directories')->insert($directoryOne);
        DB::table('directories')->insert($directoryTwo);

        $this->assertTrue(true);
    }
}