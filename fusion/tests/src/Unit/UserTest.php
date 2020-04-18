<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
	use RefreshDatabase;

	/**
     * @test
     * @group unit
     * @group user
     */
    public function each_user_must_have_a_unique_email()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: users.email');

        $attributes = collect(DB::table('users')->first())->toArray();
        $attributes['id'] = null;

        DB::table('users')->insert($attributes);
    }
}