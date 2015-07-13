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

    public function getPayedFiles($files,$adapter) {
        $filesIds = array();
        foreach($files as $file) {
            $filesIds[] = $file["file_id"];

        }
        $filesIds = array_unique($filesIds);
        $where = "";
         foreach($filesIds as $file_key => $file_value) {
               $file_value = (int) $file_value;
             if($file_key !=  0) {
                 $where .= "OR file_id = ".$file_value;
                 continue;
             }
             $where .= "file_id = ".$file_value;
         }
        $sql = "select * from payed_files left join files on payed_files.file_id = files.id where ".$where;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $resultSet = $resultSet->toArray();
        return $resultSet;

    }



}