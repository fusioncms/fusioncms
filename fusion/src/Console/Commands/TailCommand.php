<?php


namespace Fusion\Console\Commands;

use SplFileInfo;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;

/**
 * Thanks for the inspiration, Spatie:
 * https://github.com/spatie/laravel-tail.
 */
class TailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tail {--clear : Clear the terminal screen}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tail the latest logfile';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $logDirectory = storage_path('logs');

        if (! $path = $this->findLatestLogFile($logDirectory)) {
            $this->warn('Could not find a log file in ' . $logDirectory . '.');

            return;
        }

        $this->handleClearOption();

        $this->info('Found and tailing latest log file (' . basename($path) . ').' . PHP_EOL);

        $process = new Process(['tail', '-f', $path]);
        $process->setTimeout(null);
        $process->run(function ($type, $buffer) {
            if (Process::ERR === $type) {
                $this->output->write("<error>{$buffer}</error>");
            } else {
                $this->handleClearOption();

                $pattern = '/(\[\d{4}\-\d{2}\-\d{2}\ \d{2}\:\d{2}\:\d{2}\]) (.*)/';

                preg_match($pattern, $buffer, $matches);

                $timestamp = $matches[1] ?? null;
                $message   = $matches[2] ?? null;

                if (! is_null($timestamp) and ! is_null($message)) {
                    $this->output->write("<fg=red>{$timestamp}</> ");
                    $this->output->write($message . PHP_EOL . PHP_EOL);
                }
            }
        });
    }

    /**
     * Find the latest log file.
     *
     * @param string $directory
     * @return false|string
     */
    protected function findLatestLogFile(string $directory)
    {
        $logFile = collect(File::allFiles($directory))
            ->sortByDesc(function (SplFileInfo $file) {
                return $file->getMTime();
            })
            ->first();

        return $logFile
            ? $logFile->getPathname()
            : false;
    }

    /**
     * Clear the screen if enabled.
     */
    protected function handleClearOption()
    {
        if (! $this->option('clear')) {
            return;
        }

        $this->output->write(sprintf("\033\143\e"));
    }
}
