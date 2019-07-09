<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Contracts;

interface Builder
{
    public function getClass();

    public function setNamespace($namespace);

    public function getNamespace();

    public function make();

    public function getTraitImportStatements();

    public function getTraitUseStatements();

    public function getWith();
}
