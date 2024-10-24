<?php

namespace PhpSieveManager\Filters\Actions;

class RejectFilterAction extends BaseRejectFilterAction
{
    protected function getType()
    {
        return 'reject';
    }
}