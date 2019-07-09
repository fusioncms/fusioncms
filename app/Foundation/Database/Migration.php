<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Database;

use Illuminate\Support\Facades\DB;
use App\Foundation\Database\Schema\Blueprint;
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
