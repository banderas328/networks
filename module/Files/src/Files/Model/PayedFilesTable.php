<?php
namespace Files\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class PayedFilesTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

   public function saveFileForPay($fileId,$description,$cost) {
       $result = $this->tableGateway->select(array('file_id' => $fileId));
       $data = array("file_id"=>$fileId,"description"=>$description,"cost"=>$cost);
       if(!empty($result->toArray())) {
           $this->tableGateway->update($data,array("file_id" => $fileId));
           return;
       }
       $this->tableGateway->insert($data);
   }
    public function deleteFileForPay($fileId) {
     return  $this->tableGateway->delete(array("file_id" => $fileId));
    }



}