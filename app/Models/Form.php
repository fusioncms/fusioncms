<?php

namespace App\Models;

use App\Concerns\HasFieldset;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class Form extends Model
{
    use CachesQueries, HasFieldset;
}
