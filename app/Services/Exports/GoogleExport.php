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
     * Source file to copy.
     * 
     * @var string
     */
    private $source;

    /**
     * Constructor.
     *
     * @param string $source
     * @param string $destination
     */
    public function __construct($source = null)
    {
    	$this->source = $source;
    }

    /**
     * Set export source.
     * 
     * @param string $source
     */
	public function setSource($source)
	{
		$this->source = $source;
	}

	/**
	 * Parse source input with regex.
	 * 
	 * @param  string $source
	 * @return array
	 */
    public function parseSource()
    {
    	$regex   = '/spreadsheets\/([a-z0-9]+)\/values\/(.+)\?key=([a-z0-9]+)/i';
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
			list($sheetId, $range, $apiKey) = $this->parseSource();

			$client = new Google_Client();
			$client->setApplicationName('Google Sheets API v4');
			$client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
			$client->setDeveloperKey($apiKey);

			$service  = new Google_Service_Sheets($client);
			$response = $service->spreadsheets_values->get($sheetId, $range);

			return $response->getValues();
		} catch(Exception $ex) {
			Log::error(__NAMESPACE__ . ": " . $ex->getMessage());
		}
	}	
}