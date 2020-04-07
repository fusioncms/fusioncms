<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;

class NotAReservedKeyword implements Rule
{
    /**
     * Reserved words.
     *
     * @var array
     */
    protected $reserved;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->reserved = [
            'abstract', 'and', 'array', 'as', 'bool', 'break', 'callable', 'case', 'catch', 'class', 'clone', 'const', 'continue',
            'declare', 'default', 'die', 'do', 'echo', 'else', 'elseif', 'empty', 'enddeclare', 'endfor', 'endforeach', 'endif',
            'endswitch', 'endwhile', 'eval', 'exit', 'extends', 'false', 'final', 'finally', 'float', 'for', 'foreach', 'function',
            'global', 'goto', 'if', 'implements', 'include', 'include_once', 'instanceof', 'insteadof', 'int', 'interface', 'isset',
            'iterable', 'list', 'mixed', 'namespace', 'new', 'null', 'numeric', 'object', 'or', 'print', 'private', 'protected',
            'public', 'require', 'require_once', 'resource', 'return', 'static', 'string', 'switch', 'throw', 'trait', 'true', 'try',
            'unset', 'use', 'var', 'void', 'while', 'xor', 'yield'
        ];
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return ! in_array($value, $this->reserved);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute conflicts with a reserved keyword and may not be used.';
    }
}
