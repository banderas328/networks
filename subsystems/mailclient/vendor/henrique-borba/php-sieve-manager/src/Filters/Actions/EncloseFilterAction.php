<?php

namespace PhpSieveManager\Filters\Actions;

/**
 * Please refer to https://www.rfc-editor.org/rfc/rfc5703.html#section-6
 */
class EncloseFilterAction extends BaseFilterAction
{
    public $require = ['enclose'];

    protected function getRequiredParams()
    {
        return array_keys($this->getParamTypes());
    }

    protected function getParamTypes() {
        return [
            'subject' => 'string',
            'headers' => 'string-list',
            'content' => 'string'
        ];
    }

    /**
     * @return string
     */
    public function parse() {
        return "enclose :subject \"{$this->params['subject']}\" :headers [\"" . implode('", "', $this->params['headers']) . "\"] \"{$this->params['content']}\";\n";
    }
}