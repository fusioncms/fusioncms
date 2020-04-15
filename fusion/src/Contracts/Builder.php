<?php

namespace Fusion\Contracts;

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
