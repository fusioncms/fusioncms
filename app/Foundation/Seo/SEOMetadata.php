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

class SEOMetadata
{
    /**
     * @var string
     */
    protected $title;

    /**
     * @var string
     */
    protected $format;

    /**
     * @var string
     */
    protected $description;

    /**
     * @var array
     */
    protected $keywords = [];

    /**
     * @var string
     */
    protected $canonical;

    /**
     * @var array
     */
    protected $other = [];

    /**
     * Set the SEO title.
     *
     * @param  string  $title
     * @return self
     */
    public function setTitle($title)
    {
        $title = strip_tags($title);

        $this->title = $title;

        return $this;
    }

    /**
     * Set the SEO title format.
     *
     * @param  string  $format
     * @return self
     */
    public function setFormat($format)
    {
        $this->format = $format;

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
        $description = strip_tags($description);

        if (strlen($description) > 160) {
            $description = substr($description, 0, 160);
        }

        $this->description = $description;

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
        if (! is_array($keywords)) {
            $keywords = explode(', ', $keywords);
        }

        $keywords = array_map('strip_tags', $keywords);

        $this->keywords = $keywords;

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
        $this->canonical = $url;
    }

    /**
     * Set other SEO metadata.
     *
     * @param  string  $key
     * @param  string  $value
     * @return self
     */
    public function set($key, $value)
    {
        $value = strip_tags($value);

        $this->other[$key] = $value;
    }

    /**
     * Get the SEO title format.
     *
     * @return null|string
     */
    public function getFormat()
    {
        return $this->format ?: null;
    }

    /**
     * Get the SEO title.
     *
     * @return null|string
     */
    public function getTitle()
    {
        return $this->title ?: null;
    }

    /**
     * Get the SEO description.
     *
     * @return null|string
     */
    public function getDescription()
    {
        return $this->description ?: null;
    }

    /**
     * Get the SEO keywords.
     *
     * @return array
     */
    public function getKeywords()
    {
        return $this->keywords ?: [];
    }

    /**
     * Get the other SEO metadata.
     *
     * @return array
     */
    public function getOther()
    {
        return $this->other ?: [];
    }

    /**
     * Get the SEO canonical URL.
     *
     * @return null|string
     */
    public function getCanonical()
    {
        return $this->canonical ?: null;
    }

    /**
     * Reset the metadata properties.
     *
     * @return self
     */
    public function reset()
    {
        $this->format      = null;
        $this->title       = null;
        $this->description = null;
        $this->keywords    = [];
        $this->other       = [];
        $this->canonical   = null;

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
        $title       = $this->getTitle();
        $description = $this->getDescription();
        $keywords    = $this->getKeywords();
        $other       = $this->getOther();
        $canonical   = $this->getCanonical();
        $html        = [];

        $formattedTitle = $this->parseTitleFormat();

        $html[] = '<title>' . $formattedTitle . '</title>';

        if (! empty($description) or ! is_null($description)) {
            $html[] = '<meta name="description" content="' . $description . '">';
        }

        if (! empty($keywords) or ! is_null($keywords)) {
            $keywords = implode(', ', $keywords);
            $html[]   = '<meta name="keywords" content="' . $keywords . '">';
        }

        if (! empty($canonical) or ! is_null($canonical)) {
            $currentUrl = request()->fullUrl();

            if ($canonical != $currentUrl) {
                $html[] = '<link rel="canonical" href="' . $canonical . '">';
            }
        }

        if (! empty($other)) {
            foreach ($other as $key => $value) {
                $html[] = '<meta name="' . $key . '" content="' . $value . '">';
            }
        }

        return ($minify) ? implode('', $html) : implode(PHP_EOL, $html);
    }

    /**
     * Parse the title format.
     *
     * @return string
     */
    protected function parseTitleFormat()
    {
        return str_replace(
            ['{seo_title}', '{website_title}', '{website_slogan}'],
            [$this->getTitle(), setting('system.website_title'), setting('website_slogan')],
            $this->getFormat()
        );
    }
}
