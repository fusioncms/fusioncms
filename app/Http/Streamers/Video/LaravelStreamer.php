<?php

namespace App\Http\Streamers\Video;

use Symfony\Component\HttpFoundation\BinaryFileResponse;

class LaravelStreamer
{
    protected $source;

    public function __construct($source)
    {
        $this->source = $source;
    }

    public function stream()
    {
        $response = new BinaryFileResponse($this->source);
        
        BinaryFileResponse::trustXSendfileTypeHeader();

        return $response;

        exit;
    }
}