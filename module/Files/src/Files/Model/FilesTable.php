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
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
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

    public function saveTextFile($file_name,$data,$current_directory,$userId,$file_id =  false) {
        $path = "userfiles/".$userId;
        $fileName = uniqid();
        $file = $path . '/' . $userId . $fileName . $file_name;
        if( file_put_contents(getcwd() . "/public/" . $file,$data)) {
            $fileDb['user_id'] = $userId;
            if(isset($current_directory))
                $fileDb['directory'] = $current_directory;
            else $fileDb['directory']  = 0;
            $fileDb['file_title'] = $file_name;
            $fileDb['file_name'] = $file;
            $fileDb['type'] = "text_file";
            $this->tableGateway->delete(['user_id' => $userId, 'id'=>$file_id]);
            $this->tableGateway->insert($fileDb);
            return $this->tableGateway->lastInsertValue;
        }


    }
    public function renameFile($fileId,$fileName, $userId = false)
    {
        if(!$userId) {
            session_start();
            $user_session = $_SESSION['user'];
            $userId = $user_session["id"];
        }
        $fileId= (int)$fileId;
        $data = array('file_title' => $fileName);
        $this->tableGateway->update($data,['user_id' => $userId,'id' => $fileId] );
    }

    public function getTextFile($fileId,$userId) {

        $sql = "SELECT * FROM files where id=".$fileId." and user_id=".$userId;
        $adapter = $this->adapter;
        $fileData = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE)->toArray()[0];
        $fileContent = file_get_contents(getcwd() . "/public/".$fileData['file_name']);
        return ['id'=> $fileData['id'],'content' => $fileContent , 'file_title' => $fileData['file_title']];


    }

//    public function copyFileToMarketDir($adapter,$data){
//        session_start();
//        $user_session = $_SESSION['user'];
//        $userId = $user_session["id"];
//        $path = "/userfiles";
//        $fileName = microtime();
//        $file = $path . '/' . $userId . $fileName . $data['file_title'];
//        $sql = "select id from users_filesystem where path='market' and user_id = ".$userId;
//        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
//        $dirId = $result->toArray()[0]['id'];
//        if(copy(getcwd() . "/public/" .$data["file_name"], getcwd() . "/public/" . $file)) {
//            $fileDb['user_id'] = $userId;
//            $fileDb['directory'] = $dirId;
//            $fileDb['file_title'] = $data['file_title'];
//            $fileDb['file_name'] = $file;
//            $fileDb['type'] = $data['type'];
//            $this->tableGateway->insert($fileDb);
//        }
//        else {
//            die("error");
//        }
//    }

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
    public function moveFileToSystem($fileId,$requiredDirId,$userId,$adapter){
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql  = "select * from files  WHERE id=".$fileId;
        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE)->toArray();
        if(count($result)) {
            if($result[0]["user_id"] == $userId) {
                $sql  = "UPDATE files set directory=".$requiredDirId." WHERE id=".$fileId." and user_id=".$userId;
                $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
                return $result;
            }
            else {
                $filename = explode("/",$result[0]['file_name'])[3];
                $filenameExt = explode('.',$filename)[1];
                $newFileName = uniqid();
                $newFileName .= ".".$filenameExt;
                $newPath = $_SERVER['DOCUMENT_ROOT']."/userfiles/".$userId."/".$newFileName;
                $oldPath = $_SERVER['DOCUMENT_ROOT']."/userfiles/".$result[0]['user_id']."/".$filename;
                $filename = "/userfiles/".$result[0]['user_id']."/".$filename;
                copy($oldPath,$newPath);
                $data = [
                    "file_name" => $filename,
                    "file_title" => $result[0]["file_title"],
                    "type" => $result[0]["type"],
                    "shared" => 0,
                    "user_id" => $userId,
                    "directory" => $requiredDirId,
                ];
                return $this->tableGateway->insert($data);
            }
        }
        die("file error");

    }


}
