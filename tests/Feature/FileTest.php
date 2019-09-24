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

use App\Models\File;
use Facades\FileFactory;
use App\Models\Directory;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FileTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_guest_can_not_upload_files()
    {
        $this->json('POST', 'api/files')->assertStatus(401);
    }

    /** @test */
    public function a_guest_can_not_delete_files()
    {
        $file = factory(File::class)->create();

        $this->json('DELETE', 'api/files/'.$file->id)->assertStatus(401);
    }

    /** @test */
    public function a_user_without_permissions_can_not_delete_files()
    {
        $this->actingAs($this->user, 'api');
        
        $file = factory(File::class)->create();

        $this->json('DELETE', 'api/files/'.$file->id)->assertStatus(403);
    }

    /** @test */
    public function a_valid_file_must_be_provided()
    {
        $this->actingAs($this->admin, 'api');

        $this->json('POST', 'api/files', [
            'file' => 'not-a-file',
        ])->assertStatus(422);
    }

    /** @test */
    public function a_user_with_permissions_can_upload_files()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $response = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ]);
        
        $file = $response->getData()->data;

        Storage::disk('public')->assertExists($file->location);
        
        $response->assertStatus(201);
    }

    /** @test */
    public function a_user_with_permissions_can_get_a_file()
    {
        $this->actingAs($this->admin, 'api');

        $file = factory(File::class)->create(['name' => 'lorem']);

        $response = $this->json('GET', '/api/files/'.$file->uuid)
            ->assertStatus(200);
        
        $payload = $response->getData()->data;

        $this->assertEquals($payload->name, 'lorem');
    }

    /** @test */
    public function a_user_with_permissions_can_download_files()
    {
        $this->actingAs($this->admin, 'api');

        $photo = UploadedFile::fake()->image('photo.jpg');

        $file = $this->json('POST', '/api/files', [
            'file' => $photo,
        ])->getData()->data;

        Storage::disk('public')->assertExists($file->location);
        
        $response = $this->json('GET', '/api/files/'.$file->uuid.'/download')
            ->assertStatus(200);

        $this->assertTrue($response->headers->get('content-type') === 'image/jpeg');
        $this->assertTrue($response->headers->get('content-disposition') === 'attachment; filename=photo.jpeg');

        Storage::disk('public')->delete($file->location);
        Storage::disk('public')->assertMissing($file->location);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_files()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $file = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ])->getData()->data;
        
        $response = $this->json('DELETE', '/api/files/'.$file->id)
            ->assertStatus(200);
        
        $this->assertDatabaseMissing('files', [
            'id' => $file->id
        ]);

        Storage::disk('public')->assertMissing($file->location);
    }

    /** @test */
    public function a_user_with_permissions_can_edit_file_names()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $response = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ]);
        
        $file = $response->getData()->data;
        $name = 'updated photo name';

        $response = $this->json('PATCH', '/api/files/'.$file->id, [
            'name' => $name,
        ]);
        
        $response->assertStatus(200);
        
        $filename = Str::slug($file->uuid.' '.$name);
        $location = 'files/'.$filename.'.'.$file->extension;

        Storage::disk('public')->assertExists($location);
        Storage::disk('public')->assertMissing($file->location);

        $this->assertDatabaseHas('files', [
            'id'       => $file->id,
            'name'     => $name,
            'slug'     => Str::slug($name),
            'location' => 'files/'.$filename.'.'.$file->extension,
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_edit_file_descriptions()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        $file        = factory(File::class)->create();
        $description = 'This is a new file description.';

        $response = $this->json('PATCH', 'api/files/'.$file->id, [
            'description' => $description,
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('files', [
            'id'          => $file->id,
            'description' => $description,
        ]);
    }

    // /** @test */
    public function a_user_with_permissions_can_replace_existing_files()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $response = $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo.jpg')
        ]);
        
        $file = $response->getData()->data;

        $response = $this->json('POST', '/api/files/'.$file->id.'/replace', [
            'file' => UploadedFile::fake()->image('new_photo.jpg')
        ]);
        
        $replacement = $response->getData()->data;
        
        $response->assertStatus(200);

        Storage::disk('public')->assertExists($replacement->location);
        Storage::disk('public')->assertMissing($file->location);
    }

    /** @test */
    public function a_user_with_permissions_can_move_files()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        $file      = factory(File::class)->create();
        $directory = factory(Directory::class)->create();

        $response = $this->json('PATCH', 'api/files/'.$file->id, [
            'directory_id' => $directory->id,
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('files', [
            'id'           => $file->id,
            'directory_id' => $directory->id,
        ]);
    }

    /** @test */
    public function files_can_be_searched_by_name()
    {
        $this->actingAs($this->admin, 'api');

        $photo1 = factory(File::class)->create(['name' => 'lorem']);
        $photo2 = factory(File::class)->create(['name' => 'ipsum']);
        $photo3 = factory(File::class)->create(['name' => 'dolor']);
        $photo4 = factory(File::class)->create(['name' => 'sit']);
        $photo5 = factory(File::class)->create(['name' => 'amet']);
        $photo6 = factory(File::class)->create(['name' => 'do']);

        factory(File::class, 100)->create(['name' => 'a dummy file']);

        $response = $this->json('GET', '/api/files?search=do');
        $data     = collect($response->getData()->data);

        $this->assertCount(2, $data);
        $this->assertCount(1, $data->where('name', 'do'));
        $this->assertCount(1, $data->where('name', 'dolor'));

        $response = $this->json('GET', '/api/files?search=dolor');
        $data     = collect($response->getData()->data);

        $this->assertCount(1, $data);
        $this->assertCount(1, $data->where('name', 'dolor'));
    }

    /** @test */
    public function files_can_be_sorted_by_name()
    {
        $this->actingAs($this->admin, 'api');

        $photo1 = factory(File::class)->create(['name' => 'lorem']);
        $photo2 = factory(File::class)->create(['name' => 'ipsum']);
        $photo3 = factory(File::class)->create(['name' => 'dolor']);
        $photo4 = factory(File::class)->create(['name' => 'sit']);
        $photo5 = factory(File::class)->create(['name' => 'amet']);
        $photo5 = factory(File::class)->create(['name' => 'do']);

        $response = $this->json('GET', '/api/files?sort=name');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['amet', 'do', 'dolor', 'ipsum', 'lorem', 'sit'], $data);
    }

    /** @test */
    public function files_can_be_sorted_by_filesize()
    {
        $this->actingAs($this->admin, 'api');

        Storage::fake('public');

        $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo1.jpg', 500, 500)
        ]);

        $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo2.jpg', 700, 700)
        ]);

        $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo3.jpg', 100, 100)
        ]);

        $this->json('POST', '/api/files', [
            'file' => UploadedFile::fake()->image('photo4.jpg', 150, 150)
        ]);

        $response = $this->json('GET', '/api/files?sort=bytes');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['photo3', 'photo4', 'photo1', 'photo2'], $data);
    }

    /** @test */
    public function files_can_be_sorted_by_last_modified_timestamp()
    {
        $this->actingAs($this->admin, 'api');

        $photo1 = factory(File::class)->create(['name' => 'lorem', 'updated_at' => now()->addDays(1)]);
        $photo2 = factory(File::class)->create(['name' => 'ipsum', 'updated_at' => now()->addDays(3)]);
        $photo3 = factory(File::class)->create(['name' => 'dolor', 'updated_at' => now()->addDays(2)]);
        $photo4 = factory(File::class)->create(['name' => 'sit', 'updated_at' => now()->addDays(6)]);
        $photo5 = factory(File::class)->create(['name' => 'amet', 'updated_at' => now()->addDays(4)]);
        $photo5 = factory(File::class)->create(['name' => 'do', 'updated_at' => now()->addDays(5)]);

        $response = $this->json('GET', '/api/files?sort=updated_at');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['lorem', 'dolor', 'ipsum', 'amet', 'do', 'sit'], $data);
    }

    /** @test */
    public function image_files_can_be_filtered()
    {
        $this->actingAs($this->admin, 'api');

        FileFactory::withName('image')->asImage()->create();
        FileFactory::withName('audio')->asAudio()->create();
        FileFactory::withName('video')->asVideo()->create();
        FileFactory::withName('document')->asDocument()->create();

        $response = $this->json('GET', '/api/files?filter=images');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['image'], $data);
    }

    /** @test */
    public function video_files_can_be_filtered()
    {
        $this->actingAs($this->admin, 'api');

        FileFactory::withName('image')->asImage()->create();
        FileFactory::withName('audio')->asAudio()->create();
        FileFactory::withName('video')->asVideo()->create();
        FileFactory::withName('document')->asDocument()->create();

        $response = $this->json('GET', '/api/files?filter=videos');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['video'], $data);
    }

    /** @test */
    public function audio_files_can_be_filtered()
    {
        $this->actingAs($this->admin, 'api');

        FileFactory::withName('image')->asImage()->create();
        FileFactory::withName('audio')->asAudio()->create();
        FileFactory::withName('video')->asVideo()->create();
        FileFactory::withName('document')->asDocument()->create();

        $response = $this->json('GET', '/api/files?filter=audio');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['audio'], $data);
    }

    /** @test */
    public function document_files_can_be_filtered()
    {
        $this->actingAs($this->admin, 'api');

        FileFactory::withName('image')->asImage()->create();
        FileFactory::withName('audio')->asAudio()->create();
        FileFactory::withName('video')->asVideo()->create();
        FileFactory::withName('document')->asDocument()->create();

        $response = $this->json('GET', '/api/files?filter=documents');
        $data     = collect($response->getData()->data)->map(function($item) {
            return $item->name;
        })->toArray();
        
        $this->assertSame(['document'], $data);
    }
}
