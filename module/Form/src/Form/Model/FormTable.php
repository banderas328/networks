<?php
namespace  Form\Model;

use Zend\Db\TableGateway\TableGateway;

class FormTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function getUserForm($userId) {
     $data =  array ("user_id" => $userId);
     $result =  $this->tableGateway->select($data);
     return ($result->toArray());
    }

    public function createForm ($userId){
    $data = array ('user_id' => $userId);
    $this->tableGateway->insert($data);
    return false;
    }




}