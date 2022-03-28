<?php

namespace Files\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Files\Model\FileSystem;
use Zend\Config\Config;
use Zend\Config\Factory;


//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class FileSystemTable
{
    protected $tableGateway;

    public function __construct()
    {
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("users_filesystem", $adapter);
    }

    public function getUserDirs($adapter, $dirKey, $userId)
    {

        $dirKey = (int)$dirKey;
        $userId = (int)$userId;
        $sql = "SELECT  *,users_filesystem.id as id FROM users_filesystem left join network on `users_filesystem`.`id` = `network`.`path_id` WHERE users_filesystem.user_id='" . $userId . "' and users_filesystem.parent_path = '" . $dirKey . "'";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet->buffer()->toArray();
    }


    public function getDir($dir, $userId, $adapter)
    {
        $sql = "SELECT  * FROM users_filesystem WHERE user_id='" . $userId . "' and id = '" . $dir . "'";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet->toArray();
    }

    public function getUserParentDir($adapter, $dirKey, $userId)
    {
        $userId = (int)$userId;
        $dirKey = (int)$dirKey;
        $sql = "SELECT  * FROM users_filesystem WHERE user_id='" . $userId . "' and id = '" . $dirKey . "'";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if (!empty($resultSet->buffer()->toArray()[0]['parent_path'])) return $resultSet->buffer()->toArray()[0]['parent_path'];
        else return false;
    }

    public function createUserDir($adapter, $request)
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $current_directory = (int)$request->getPost()->current_directory;
        $directory_name = $request->getPost()->directory_name;
        $data = array('parent_path' => $current_directory, 'path' => $directory_name, 'user_id' => $userId);
        $this->tableGateway->insert($data);
    }


    public function getChildDirs($dirId, $userId)
    {
        $dirs = $this->getChildDirsList((int)$dirId, $userId, false);
        //  var_dump($dirs);
        $dirs = $this->sortDirs($dirs);
        $dirs[] = $dirId;

        return $dirs;
    }

    public function deleteDirWithChilds($adapter, $dirs)
    {
        foreach ($dirs as $dir) {
            $sql = "delete from users_filesystem where id=" . (int)$dir;
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        }
        return true;

    }

    public function getChildDirsList($dirId, $userId, $allDirs)
    {
        $dirId = (int)$dirId;
        $userId = (int)$userId;
        $sql = "SELECT id from users_filesystem where parent_path = " . $dirId . " and user_id = " . $userId;
        $fileSystem = new FileSystem();
        $fileSystem->getAdapter();
        $adapter = $fileSystem->getAdapter();
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $dirs = $resultSet->buffer()->toArray();
        if (!empty($dirs)) {
            $allDirs[] = $dirs;
            foreach ($dirs as $dir) {
                $childDirs = $this->getChildDirsList($dir['id'], $userId, $allDirs);
                if (!empty($childDirs)) {
                    $allDirs = $childDirs;
                }
            }
        }
        return $allDirs;
    }

    public function sortDirs($dirs)
    {
        $sortedDirs = array();

        if (is_array($dirs)) {
            foreach ($dirs as $dir_key) {
                foreach ($dir_key as $dir) {
                    if (!in_array($dir['id'], $sortedDirs))
                        $sortedDirs[] = $dir['id'];
                }
            }
        } else $sortedDirs = $dirs;
        return $sortedDirs;
    }

    public function getDirOptions($dir, $adapter)
    {
        $dir = (int)$dir;
        $sql = "SELECT * FROM network where path_id =" . $dir;
        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $result;

    }

    public function getUserDirsDetails($adapter, $dirs)
    {
        $sqlIn = "IN (";
        $i = 0;

        foreach ($dirs as $dir) {
            if ($i != 0) {
                $sqlIn .= ",";
            }
            $sqlIn .= (int)$dir;
            $i++;
        }
        $sqlIn .= ")";
        $sql = "SELECT * FROM users_filesystem left join network on users_filesystem.id = network.path_id where users_filesystem.id  " . $sqlIn;
        $result = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $result;
    }

    public function moveDir($adapter, $dirId, $currentDirId, $userId)
    {
        $dirId = (int)$dirId;
        $currentDirId = (int)$currentDirId;
        $sql = "UPDATE users_filesystem set parent_path=" . $currentDirId . " WHERE  user_id=" . $userId . " and id=" . $dirId;
        return $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }


}
