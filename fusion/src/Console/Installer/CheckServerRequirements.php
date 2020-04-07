<?php

namespace Fusion\Console\Installer;

class CheckServerRequirements
{
    /**
     * @var array
     */
    protected $requirements;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $requirements)
    {
        $this->requirements = $requirements;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $tests = [
            'php'        => $this->testPHP(),
            'extensions' => $this->testExtensions(),
        ];

        foreach ($tests as $test) {
            if ($test === false) {
                return false;
            }
        }

        return true;
    }

    /**
     * Tests if the installed version of PHP meets the application's
     * requirments.
     *
     * @return bool
     */
    protected function testPHP()
    {
        if (version_compare(phpversion(), $this->requirements['php'], '>=')) {
            return true;
        }

        return false;
    }

    /**
     * Tests if the specified extensions exist on the server.
     *
     * @return bool
     */
    protected function testExtensions()
    {
        foreach ($this->requirements['extensions'] as $extension) {
            if (! extension_loaded($extension)) {
                return false;
            }
        }

        return true;
    }
}
