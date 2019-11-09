<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Exports;

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
     * @var string
     */
    private $sheetId;

    /**
     * @var string
     */
    private $range;

    /**
     * @var string
     */
    private $apiKey;

    /**
     * Constructor.
     *
     * @param string $source
     * @param string $destination
     */
    public function __construct($source = null)
    {
        if ($source !== null) {
    	   $this->setSource($source);
        }
    }

    /**
     * Set export source.
     * 
     * @param  string $source
     * @return void
     */
	public function setSource(string $source)
	{
        $regex   = '/spreadsheets\/(.+)\/values\/(.+)\?key=(.+)/i';
        $matches = [];

        preg_match($regex, $source, $matches);

        $this->sheetId = $matches[1];
        $this->range   = $matches[2];
        $this->apiKey  = $matches[3];
	}

    /**
     * Set export range.
     * 
     * @param  string $range
     * @return void
     */
    public function setRange(string $range)
    {
        $this->range = $range;
    }

	/**
	 * Parse source input with regex.
	 * 
	 * @param  string $source
	 * @return array
	 */
    public function parseSource()
    {
    	$regex   = '/spreadsheets\/(.+)\/values\/(.+)\?key=(.+)/i';
    	$matches = [];

    	preg_match($regex, $this->source, $matches);

    	return array_slice($matches, 1, 3);
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
			$client->setDeveloperKey($this->apiKey);

			$service  = new Google_Service_Sheets($client);
			$response = $service->spreadsheets_values->get($this->sheetId, $this->range);

			return $response->getValues();
		} catch(Exception $ex) {
			Log::error(__NAMESPACE__ . ": " . $ex->getMessage());
		}
	}	
}