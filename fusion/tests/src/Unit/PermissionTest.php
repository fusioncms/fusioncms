<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PermissionTest extends TestCase
{
	use RefreshDatabase;

	/**
     * @test
     * @group unit
     * @group permission
     */
    public function each_permission_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: permissions.slug');

        $attributes = collect(DB::table('permissions')->first())->toArray();
        $attributes['id'] = null;

        DB::table('permissions')->insert($attributes);
    }
}