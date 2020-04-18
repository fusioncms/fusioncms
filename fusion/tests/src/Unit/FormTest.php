<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Form;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FormTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @test
     * @group unit
     * @group forms
     */
    public function each_form_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: forms.handle');

        DB::table('forms')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
            'slug'   => Str::slug($name),
        ]);

        DB::table('forms')->insert([
            'name'   => $name,
            'handle' => Str::slug($name, '_'),
            'slug'   => 'new-slug',
        ]);
    }

    /**
     * @test
     * @group unit
     * @group forms
     */
    public function each_form_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: forms.slug');

        DB::table('forms')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
            'slug'   => Str::slug($name),
        ]);

        DB::table('forms')->insert([
            'name'   => $name,
            'handle' => 'new-handle',
            'slug'   => Str::slug($name),
        ]);
    }
}
