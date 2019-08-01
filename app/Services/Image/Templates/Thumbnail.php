<?php

namespace App\Services\Image\Templates;

use Intervention\Image\Image;
use Intervention\Image\Filters;

class Thumbnail implements FilterInterface
{
    /**
     * Applies the filter effect(s) to the given image.
     * 
     * @param  \Intervention\Image\Image  $image
     * @return \Intervention\Image\Image
     */
    public function applyFilter(Image $image)
    {
        $image->fit(500);

        return $image;
    }
}