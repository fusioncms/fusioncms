<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Seo;

class SEO
{
    /**
     * Return the instance of SEOMetada.
     *
     * @return \App\Foundation\Seo\SEOMetadata
     */
    public function metadata()
    {
        return app('seo.metadata');
    }

    /**
     * Set the SEO title format.
     *
     * @param  string  $format
     * @return self
     */
    public function setFormat($format)
    {
        $this->metadata()->setFormat($format);

        return $this;
    }

    /**
     * Set the SEO title.
     *
     * @param  string  $title
     * @return self
     */
    public function setTitle($title)
    {
        $this->metadata()->setTitle($title);

        return $this;
    }

    /**
     * Set the SEO description.
     *
     * @param  string  $description
     * @return self
     */
    public function setDescription($description)
    {
        $this->metadata()->setDescription($description);

        return $this;
    }

    /**
     * Set the SEO keywords.
     *
     * @param  array|string  $keywords
     * @return self
     */
    public function setKeywords($keywords)
    {
        $this->metadata()->setKeywords($keywords);

        return $this;
    }

    /**
     * Set the SEO canonical URL.
     *
     * @param  string  $url
     * @return self
     */
    public function setCanonical($url)
    {
        $this->metadata()->setCanonical($url);

        return $this;
    }

    /**
     * Generate and render the HTML metadata tags.
     *
     * @param  bool  $minify
     * @return string
     */
    public function generate($minify = false)
    {
        $html = $this->metadata()->generate();

        return ($minify) ? str_replace(PHP_EOL, '', $html) : $html;
    }
}
