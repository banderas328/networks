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

    public function bueFile($data) {
        $this->tableGateway->insert($data);
    }

    public function checkBuedFile($file_id) {
        $result = $this->tableGateway->select(array("file_id" => $file_id));
        $result = $result->current();
        if(isset($result->file_id)) {
            return $result->file_id;
        }
        else {
            return false;
        }


    }
}