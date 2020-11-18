<?php
namespace Network\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Zend\Config\Config;
use Zend\Config\Factory;
//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class NetworkTable
{
    protected $tableGateway;

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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("network",$adapter);
    }

    public function shareDir($dir) {
        $data = array (
            'path_id' => $dir,
            'is_public' => 1,
            'is_password' => 0,
            'password' => NULL

        );
        $this->tableGateway->delete(array ('path_id' => $dir));
        $this->tableGateway->insert($data);
    }

    public function getUserSharedDirs($request,$adapter) {
        $userId = (int) $request->getPost()->user_id;
        $sql = "select * from users_filesystem join network on users_filesystem.id = network.path_id where users_filesystem.user_id = ".$userId;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $allFolders = $resultSet->buffer()->toArray();
        $alreadyShared = array();
        foreach ($allFolders as $folder) {
            if($folder['is_public']) {
                $alreadyShared[] = $folder['path_id'];
            }
        }
        return  array("result" => $resultSet , "already_shared" => $alreadyShared);

    }

    public function shareDirWithPassword($dir,$password) {
        $data = array (
            'path_id' => $dir,
            'is_public' => 0,
            'is_password' => 1,
            'password' => $password

        );
        $this->tableGateway->delete(array ('path_id' => $dir));
        $this->tableGateway->insert($data);

    }

    public function networkDirectoryLogin($request,$adapter){
        $dir_key = (int)$request->getPost()->dir_key;
        $password = $request->getPost()->password;
        $sql = new Sql($adapter);
        $select = $sql->select();
        $select->from('network');
        $select->where(array('path_id' => $dir_key,'password' => $password , 'is_password' => 1));
        $statement = $sql->prepareStatementForSqlObject($select);
        $results = $statement->execute();
        $result = \Zend\Stdlib\ArrayUtils::iteratorToArray($results);
        if(isset($result[0]['path_id']))
        return $result[0]['path_id'];
        else return false;
    }

}