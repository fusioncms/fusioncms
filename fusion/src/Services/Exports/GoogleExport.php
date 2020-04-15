<?php

namespace Fusion\Services\Exports;

use Google_Client;
use Google_Service_Sheets;
use Maatwebsite\Excel\Excel;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;

class GoogleExport implements FromArray
{
	use Exportable;

	/**
	 * Optional Writer Type
	 *
	 * @var string
	 */
    private $writerType = Excel::CSV;

    /**
    * Optional headers
    *
    * @var arry
    */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];

    /**
     * @var boolean
     */
    private $isPreview;

    /**
     * Constructor.
     *
     * @param string $source
     * @param string $destination
     */
    public function __construct($source, $isPreview = false)
    {
        $this->source    = $source;
        $this->isPreview = $isPreview;
    }

    /**
     * Parse source for matching `regex` value.
     *
     * @param  string $regex
     * @return string|boolean
     */
    protected function getFromSource(string $regex)
    {
        $matches = [];
        $match   = preg_match($regex, $this->source, $matches);

        if ($match and @$matches[1]) {
            return $matches[1];
        }

        return false;
    }

    /**
     * Determin if source contains matching `regex` value.
     *
     * @param  string $regex
     * @return boolean
     */
    protected function sourceContains(string $regex)
    {
        return preg_match($regex, $this->source);
    }

    /**
     * Parse source query string.
     *
     * @return array
     */
    protected function parseQueryString()
    {
        $queryString = parse_url($this->source, PHP_URL_QUERY);
        $queryParams = explode('&', $queryString);
        $params      = [];

        foreach ($queryParams as $queryParam) {
            @list($name, $value) = explode('=', $queryParam, 2);

            if (isset($params[$name])) {
                if (is_array($params[$name])) {
                    $params[$name][] = $value;
                } else {
                    $params[$name] = [$params[$name], $value];
                }
            } else {
                $params[$name] = $value;
            }
        }

        return $params;
    }

    /**
     * Get API Key from source url.
     *
     * @return string|boolean
     */
    protected function getApiKey()
    {
        return $this->getFromSource('/\??key=(.+)$/i');
    }

    /**
     * Get Sheet ID from source url.
     *
     * @return string|boolean
     */
    protected function getSheetId()
    {
        return $this->getFromSource('/spreadsheets\/(.+)\/values/i');
    }

    /**
     * Get range(s) from source url.
     *
     * @return string|array
     */
    protected function getRange()
    {
        if ($this->isBatchRequest()) {
            $queryString = $this->parseQueryString();

            return $queryString['ranges'] ?? false;
        } else {
            return $this->getFromSource('/values\/(.+)\?/i');
        }
    }

    /**
     * Get sheet name from range param.
     *
     * @return string
     */
    protected function getRangeSheetName()
    {
        if ($this->isBatchRequest()) {
            return $this->getFromSource('/ranges=([^!|?|&]+)/i');
        } else {
            return $this->getFromSource('/values\/([^!|?]+)/i');
        }
    }

    /**
     * Determine if request is batch request.
     *
     * @return boolean
     */
    protected function isBatchRequest()
    {
        return $this->sourceContains('/spreadsheets\/(.+)\/values:batchGet/i');
    }

	/**
	 * Values for export.
	 *
	 * @return array
	 */
	public function array(): array
	{
		try {
			$client = new Google_Client();
			$client->setApplicationName('Google Sheets API v4');
			$client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
			$client->setDeveloperKey($this->getApiKey());

            $service = new Google_Service_Sheets($client);

            if ($this->isPreview) {
                $sheetName = $this->getRangeSheetName();
                $response  = $service->spreadsheets_values->get($this->getSheetId(), "{$sheetName}!1:2");
                $values    = $response->getValues();
            } else {
                if ($this->isBatchRequest()) {
                    $response = $service->spreadsheets_values->batchGet($this->getSheetId(), ['ranges' => $this->getRange()]);
                    $values   = [];

                    foreach ($response->getValueRanges() as $valueRange) {
                        $values = array_merge($values, $valueRange->getValues());
                    }
                } else {
                    $response = $service->spreadsheets_values->get($this->getSheetId(), $this->getRange());
                    $values   = $response->getValues();
                }
            }

			return $values;
		} catch(Exception $ex) {
			Log::error(__NAMESPACE__ . ": " . $ex->getMessage());
		}
	}
}