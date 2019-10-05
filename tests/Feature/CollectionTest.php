<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\FieldFactory;
use Facades\MatrixFactory;
use Facades\SectionFactory;
use Facades\FieldsetFactory;
use Tests\Foundation\TestCase;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CollectionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
        
        $this->section  = SectionFactory::times(1)->withoutFields()->create();
        $this->fields[] = FieldFactory::withName('Excerpt')->create();
        $this->fields[] = FieldFactory::withName('Content')->create();

        foreach ($this->fields as $field) {
            $this->section->fields()->save($field);
        }

        $this->fieldset = FieldsetFactory::withSections(collect([$this->section]))->create();
        $this->posts    = MatrixFactory::withName('Posts')->asCollection()->withFieldset($this->fieldset)->create();
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_collection()
    {
        $this->actingAs($this->admin, 'api');

        $fieldset   = factory(Fieldset::class)->create();
        $collection = factory(Matrix::class)->make([
            'name'     => 'Blog',
            'handle'   => 'blog',
            'type'     => 'collection',
        ])->toArray();

        $collection['fieldset'] = $fieldset->id;
        
        $response = $this->json('POST', '/api/matrices', $collection);

        $response->assertStatus(201);

        $this->assertDatabaseHasTable('mx_blog')
            ->assertDatabaseTableHasColumn('mx_blog', 'name')
            ->assertDatabaseTableHasColumn('mx_blog', 'slug');
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_new_entry()
    {
        $this->actingAs($this->admin, 'api');

        $data = [
            'name' => 'Example',
            'slug' => 'example',
            'excerpt' => 'This is an excerpt of the blog post.',
            'content' => 'This is the content of the blog post.',
        ];

        $form = $data;
        $form['status'] = true;

        $response = $this->json('POST', '/api/collections/posts', $form);

        $response->assertStatus(201);

        $data['id'] = '1';

        $this->assertDatabaseHas('mx_posts', $data);
    }

    /** @test */
    public function a_name_and_status_is_required_for_every_entry()
    {
        $this->actingAs($this->admin, 'api');

        $form['excerpt'] = 'This is an excerpt of the blog post.';
        $form['content'] = 'This is the content of the blog post.';

        $response = $this->json('POST', '/api/collections/posts', $form);

        $response->assertStatus(422)    
            ->assertJsonValidationErrors(['name', 'status']);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_entry()
    {
        $this->actingAs($this->admin, 'api');

        $form['name']    = 'Example';
        $form['slug']    = 'example';
        $form['excerpt'] = 'This is an excerpt of the blog post.';
        $form['content'] = 'This is the content of the blog post.';
        $form['status'] = true;

        $entry = $this->json('POST', '/api/collections/posts', $form)->getData()->data;

        $response = $this->json('PATCH', '/api/collections/posts/'.$entry->id, [
            'name'   => 'New Post Title',
            'status' => true,
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('mx_posts', [
            'name' => 'New Post Title',
        ])
        ->assertDatabaseMissing('mx_posts', [
            'name' => 'Example',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_entry()
    {
        $this->actingAs($this->admin, 'api');

        $form['name']    = 'Example';
        $form['slug']    = 'example';
        $form['excerpt'] = 'This is an excerpt of the blog post.';
        $form['content'] = 'This is the content of the blog post.';
        $form['status'] = true;

        $entry = $this->json('POST', '/api/collections/posts', $form)->getData()->data;

        $response = $this->json('DELETE', '/api/collections/posts/'.$entry->id);
        
        $this->assertDatabaseMissing('mx_posts', [
            'id' => $entry->id
        ]);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_entries()
    {
        $this->expectException(AuthorizationException::class);
        $this->actingAs($this->user, 'api');

        $data = [
            'name' => 'Example',
            'slug' => 'example',
            'excerpt' => 'This is an excerpt of the blog post.',
            'content' => 'This is the content of the blog post.',
        ];

        $form = $data;
        $form['status'] = true;

        $response = $this->json('POST', '/api/collections/posts', $form)
            ->assertUnauthorized();

        $this->assertDatabaseMissing('mx_posts', $data);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_entries()
    {
        $this->expectException(AuthorizationException::class);
        $this->actingAs($this->admin, 'api');

        $form['name']    = 'Example';
        $form['slug']    = 'example';
        $form['excerpt'] = 'This is an excerpt of the blog post.';
        $form['content'] = 'This is the content of the blog post.';
        $form['status'] = true;

        $entry = $this->json('POST', '/api/collections/posts', $form)->getData()->data;

        $this->actingAs($this->user, 'api');

        $response = $this->json('PATCH', '/api/collections/posts/'.$entry->id, [
            'name'   => 'New Post Title',
            'status' => true,
        ])->assertUnauthorized();
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_entries()
    {
        $this->expectException(AuthorizationException::class);
        $this->actingAs($this->user, 'api');

        $form['name']    = 'Example';
        $form['slug']    = 'example';
        $form['excerpt'] = 'This is an excerpt of the blog post.';
        $form['content'] = 'This is the content of the blog post.';
        $form['status'] = true;

        $entry = $this->json('POST', '/api/collections/posts', $form)->getData()->data;

        $response = $this->json('DELETE', '/api/collections/posts/'.$entry->id)
            ->assertUnauthorized();;
        
        $this->assertDatabaseHas('mx_posts', [
            'id' => $entry->id
        ]);
    }
}
