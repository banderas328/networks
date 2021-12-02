<?php
namespace Files\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Zend\Config\Config;
use Zend\Config\Factory;


//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class FilesTable
{
    protected $tableGateway;
    protected $adapter;

    public function __construct()
    {
        $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->adapter = $adapter;
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("files",$adapter);
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

    public function saveUserFile($data)
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $path = "userfiles/".$userId;
        $fileName = uniqid();
        $file = $path . '/' . $userId . $fileName . $data['file']['name'];
        if(move_uploaded_file($data['file']['tmp_name'], getcwd() . "/public/" . $file)) {
            $fileDb['user_id'] = $userId;
            if(isset($data["to_directory"]))
            $fileDb['directory'] = $data["to_directory"];
            else $fileDb['directory']  = 0;
            $fileDb['file_title'] = $data["file"]['name'];
            $fileDb['file_name'] = $file;
            $fileDb['type'] = $data["file"]['type'];
            $this->tableGateway->insert($fileDb);
            return $this->tableGateway->lastInsertValue;
        }
    }

    public function copyFileToMarketDir($adapter,$data){
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $path = "/userfiles";
        $fileName = microtime();
        $file = $path . '/' . $userId . $fileName . $data['file_title'];
        $sql = "select id from users_filesystem where path='market' and user_id = ".$userId;
        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $dirId = $result->toArray()[0]['id'];

        if(copy(getcwd() . "/public/" .$data["file_name"], getcwd() . "/public/" . $file)) {
            $fileDb['user_id'] = $userId;
            $fileDb['directory'] = $dirId;
            $fileDb['file_title'] = $data['file_title'];
            $fileDb['file_name'] = $file;
            $fileDb['type'] = $data['type'];
            $this->tableGateway->insert($fileDb);
        }
        else {

            die("fuck");
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



   public function getFile($adapter,$fileId,$userId) {
       $fileId = (int) $fileId;
       $userId = (int) $userId;
       $sql = "SELECT  * FROM files  WHERE user_id='".$userId."' and id = '".$fileId."'";
       return  $this->adapter->query($sql, $adapter::QUERY_MODE_EXECUTE)->toArray();
   }


   public function getDirFiles($adapter,$dir,$userId) {
       $userId = (int) $userId;
       $dir = (int) $dir;
       if($dir)
           $sql = "SELECT  * ,files.id as id FROM files left join users_filesystem on users_filesystem.id = files.directory left join payed_files on files.id = payed_files.file_id  WHERE users_filesystem.user_id='".$userId."' and files.directory = '".$dir."'";
       else
           $sql = "SELECT  *,files.id as id FROM files  left join payed_files on files.id = payed_files.file_id  WHERE files.user_id='".$userId."' and files.directory = '".$dir."' group by files.id";
       $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
       if(!empty($resultSet->buffer())) return $resultSet->buffer();
       else return false;
   }

    public function deleteFile($adapter = false,$fileId,$userId) {
        $fileId =  (int) $fileId;
        $sql = "SELECT * FROM files where id=".$fileId." and user_id=".$userId;
        if(!$adapter) $adapter = $this->adapter;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if(!empty($resultSet->buffer())) {
            //var_dump($resultSet->buffer()->toArray());die();
            $file = $resultSet->buffer()->toArray()[0];
            $fileName  = $_SERVER['DOCUMENT_ROOT'].$file["file_name"];
            @ unlink($fileName);
            $sql = "DELETE FROM files  where id=".$fileId." and user_id=".$userId;
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return true;
        }
        return false;
    }
    public function moveFileToSyste($fileId,$requiredDirId,$userId,$adapter){
        $user_session = new Container('user');
        $loggedUser = $user_session->user->id;
        $sql  = "select * from files  WHERE id=".$fileId." and user_id=".$loggedUser;
        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE)->toArray();
        if(count($result)) {
            $sql  = "UPDATE files set directory=".$requiredDirId." WHERE id=".$fileId." and user_id=".$userId;
            $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return $result;

        }
        else {

            $sql  = "select * from files  WHERE id=".$fileId;
            $sourceFile = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE)->toArray()[0];
            if(!isset($user_session->user->authedDirs)) return false;
            $authedDirs  =   $user_session->user->authedDirs;
            $dirs = explode(",", $authedDirs);
            if(in_array($sourceFile['directory'],$dirs)){
                $filename = explode("/",$sourceFile['file_name'])[2];
                $filenameExt = explode('.',$filename)[1];
                $newFileName = uniqid();
                $newFileName .= ".".$filenameExt;
                $newPath = $_SERVER['DOCUMENT_ROOT']."/userfiles/".$loggedUser."/".$newFileName;
                $oldPath = $_SERVER['DOCUMENT_ROOT']."/userfiles/".$sourceFile['user_id']."/".$filename;
                $filename = "/userfiles/".$sourceFile['user_id']."/".$filename;
                copy($oldPath,$newPath);
                $fileDb['user_id'] = $loggedUser;
                $fileDb['directory'] = $requiredDirId;
                $fileDb['file_title'] = $sourceFile['file_title'];
                $fileDb['file_name'] = $filename;
                $fileDb['type'] = $sourceFile['type'];
                $this->tableGateway->insert($fileDb);



            }

        }


        
        
    }


}