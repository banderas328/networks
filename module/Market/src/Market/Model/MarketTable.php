<?php
namespace Market\Model;

use Zend\Db\TableGateway\TableGateway;

class MarketTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }


}