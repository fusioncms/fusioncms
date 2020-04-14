<?php

namespace Tests\Mocks;

use App\Concerns\HasExtension;
use App\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class ExtensionBase extends Model
{
	use HasExtension;

	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mock_extension';

    /**
	 * The attributes that aren't mass assignable.
	 *
	 * @var array
	 */
    protected $fillable = [ 'id', 'name', 'handle', 'description', 'status' ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [ 'status' => 'boolean' ];

    /**
     * Create mock database table.
     *
     * @return void
     */
    public static function setUp()
    {
        Schema::create('mock_extension', function ($table) {
            $table->increments('id');
            $table->string('name');
            $table->string('handle')->unique();
            $table->text('description');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Destroy mock database table.
     *
     * @return void
     */
    public static function tearDown()
    {
        Schema::dropIfExists('mock_extension');
    }
}