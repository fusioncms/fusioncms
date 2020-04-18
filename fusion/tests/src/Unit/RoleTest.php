<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
{
	use RefreshDatabase;

	/**
     * @test
     * @group unit
     * @group role
     */
    public function each_role_must_have_a_unique_name()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: roles.name');

        $attributes = collect(DB::table('roles')->first())->toArray();
        $attributes['id']   = null;
        $attributes['slug'] = 'new-slug';

        DB::table('roles')->insert($attributes);
    }

    /**
     * @test
     * @group unit
     * @group role
     */
    public function each_role_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: roles.slug');

        $attributes = collect(DB::table('roles')->first())->toArray();
        $attributes['id']   = null;
        $attributes['name'] = 'New Name';

        DB::table('roles')->insert($attributes);
    }
}