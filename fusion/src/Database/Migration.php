<?php


namespace Fusion\Database;

use Fusion\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration as IlluminateMigration;

class Migration extends IlluminateMigration
{
    /**
     * @var object
     */
    public $schema;

    /**
     * Create a new Migration instance.
     */
    public function __construct()
    {
        $this->schema = DB::connection()->getSchemaBuilder();

        $this->schema->blueprintResolver(function ($table, $callback) {
            return new Blueprint($table, $callback);
        });
    }
}
