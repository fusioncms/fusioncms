<?php

namespace Tests\Feature;

use Tests\Foundation\TestCase;
// use Tests\Mocks\MockExtension;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ExtensionTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    // public function setUp(): void
    // {
    //     parent::setUp();
    //     $this->handleValidationExceptions();
    // }

    /** @test */
    public function extension()
    {
    	// $this->extension = resolve(MockExtension::class);
    	$this->assertTrue(true);
    }
}