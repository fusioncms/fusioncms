<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\File;
use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FileTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group file
     */
    public function each_file_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: files.slug');

        $file = factory(File::class)->create();
        $file = $file->toArray();
        $file['id']   = null;
        $file['uuid'] = 'new-uuid';

        unset($file['url']);

        DB::table('files')->insert($file);
    }

    /**
     * @test
     * @group unit
     * @group file
     */
    public function each_file_must_have_a_unique_uuid()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: files.uuid');

        $file = factory(File::class)->create();
        $file = $file->toArray();
        $file['id']   = null;
        $file['slug'] = 'new-slug';

        unset($file['url']);

        DB::table('files')->insert($file);
    }
}
