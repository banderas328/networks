<?php
namespace Files\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class FilesTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

//    public function getUserFiles($adapter)
//    {
//        $user_session = new Container('user');
//        $userId = $user_session->user->id;
//        $sql = new Sql($adapter, 'files');
//        $select = $sql->select();
//        $select->where(array('user_id' => $userId));
//        $selectString = $sql->getSqlStringForSqlObject($select);
//        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
//        return $results;
//    }

    public function saveUserFile($adapter, $data)
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $path = "/userfiles";
        $fileName = uniqid();
        $file = $path . '/' . $userId . $fileName . $data['file']['name'];
        if(move_uploaded_file($data['file']['tmp_name'], getcwd() . "/public/" . $file)) {
            $fileDb['user_id'] = $userId;
            $fileDb['directory'] = $data["to_directory"];
            $fileDb['file_title'] = $data["file"]['name'];
            $fileDb['file_name'] = $file;
            $fileDb['type'] = $data["file"]['type'];
            $this->tableGateway->insert($fileDb);
        }

    }

//    public function getFile($fileId, $adapter)
//    {
//        $user_session = new Container('user');
//        $userId = $user_session->user->id;
//        $sql = new Sql($adapter, 'files');
//        $select = $sql->select();
//        $select->where(array('user_id' => $userId));
//        $select->where(array('id' => $fileId));
//        $selectString = $sql->getSqlStringForSqlObject($select);
//        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
//        return $results;
//    }

   public function downloadFile($adapter,$fileId,$userId) {
       $fileId = (int) $fileId;
       $userId = (int) $userId;
       $sql = "SELECT  * FROM files  WHERE user_id='".$userId."' and id = '".$fileId."'";
       $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
       return $resultSet->toArray();
   }


   public function getDirFiles($adapter,$dir,$userId) {
       $user_session = new Container('user');
       $userId = (int) $userId;
       $dir = (int) $dir;
       if($dir)
           $sql = "SELECT  * ,files.id as id FROM files left join users_filesystem on users_filesystem.id = files.directory WHERE users_filesystem.user_id='".$userId."' and files.directory = '".$dir."'";
       else
           $sql = "SELECT  *,files.id as id FROM files  WHERE files.user_id='".$userId."' and files.directory = '".$dir."' group by files.id";
       $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
       if(!empty($resultSet->toArray())) return $resultSet->toArray();
       else return false;
   }

    public function deleteFile($adapter,$fileId,$userId) {
        $fileId =  (int) $fileId;
        $sql = "SELECT * FROM files where id=".$fileId." and user_id=".$userId;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if(!empty($resultSet->toArray())) {
            $file = $resultSet->toArray()[0];
            $fileName  = $_SERVER['DOCUMENT_ROOT'].$file["file_name"];
            @ unlink($fileName);
            $sql = "DELETE FROM files  where id=".$fileId." and user_id=".$userId;
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return true;
        }
        return false;
    }


}