<?php

namespace Themes\Hello\Http\Controllers;

use Illuminate\Http\Response;

class RSSController extends Controller
{
    public function index()
    {
        $news = matrix_entries('news')
            ->orderBy('publish_at', 'desc')
            ->limit(10)
            ->get();

        $data['feed'] = [
            'version'       => 'https:/​/jsonfeed.org/version/1',
            'title'         => 'Get FusionCMS',
            'home_page_url' => 'http://fusioncms.test/',
            'feed_url'      => 'http://fusioncms.test/feed.json',
            'items'         => $news->map(function($item) {
                return [
                    'id'             => $item->id,
                    'title'          => $item->name,
                    'url'            => url($item->slug),
                    'content_text'   => $item->excerpt,
                    'date_published' => $item->created_at->toAtomString(),
                ];
            })->toArray(),
        ];

        return response()->view('rss', $data, 200)
            ->header('Content-Type', 'application/json');
    }
}