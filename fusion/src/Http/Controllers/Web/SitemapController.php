<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;

class SitemapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('seo::sitemap');
    }

    /**
     * Display a listing of the resource in XML.
     *
     * @return \Illuminate\Http\Response
     */
    public function xml()
    {
        return response()
            ->view('seo::sitemap_xml', [], 200)
            ->header('Content-Type', 'Content-Type', 'application/xml; charset=UTF-8');
    }
}
