<?php

namespace App\Http\Controllers\API;

use Artisan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BackupResource;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('backups.show');

        return new BackupResource([]);
    }

    public function run(Request $request)
    {
        $this->authorize('backups.run');

        Artisan::call('backup:run', [
            '--no-interaction' => true,
            '--quiet'          => true
        ]);  

        return new BackupResource([]);
    }

    public function cleanup(Request $request)
    {
        $this->authorize('backups.clean');

        try {
            Artisan::call('backup:clean', [
                '--no-interaction' => true,
                '--quiet'          => true
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }


        return new BackupResource([]);
    }
}
