<?php

namespace Fusion\Http\Streamers\Video;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class LaravelStreamer
{
    protected $source;

    protected $mimetype;

    public function __construct($source, $mimetype)
    {
        $this->source   = $source;
        $this->mimetype = $mimetype;
    }

    public function stream()
    {
        $response = new BinaryFileResponse($this->source);
        $response->setAutoEtag(true);
        $response->headers->set('Content-Type', $this->mimetype);

        return $response;

        exit;
    }
}