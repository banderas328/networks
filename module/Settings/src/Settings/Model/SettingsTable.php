<?php

namespace Settings\Model;

use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Zend\Paginator\Adapter\DbSelect;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;
use Zend\Config\Config;
use Zend\Config\Factory;
use Zend\Db\Sql\Select;


class SettingsTable
{
    protected $tableGateway;
    protected $adapter;

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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("user_settings", $adapter);
        $this->adapter = $adapter;
    }


    public function saveGeneralSettings($settings)
    {
        if(isset($settings["file"])){
            $files = $settings["file"];
        }
        if (isset($files)) $settings["file"] = $files;
        if (is_array($settings["first_name"])) $settings["first_name"] = $settings["first_name"][1];
        if (is_array($settings["second_name"])) $settings["second_name"] = $settings["second_name"][1];
        if (is_array($settings["job"])) $settings["job"] = $settings["job"][1];
        if (is_array($settings["country"])) $settings["country"] = $settings["country"][1];
        if (is_array($settings["city"])) $settings["city"] = $settings["city"][1];
        if (is_array($settings["about"])) $settings["about"] = $settings["about"][1];
        if (is_array($settings["phone"])) $settings["phone"] = $settings["phone"][1];
//         if (is_array($settings["visibility"])) $settings["visibility"] = $settings["visibility"][1];
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];

        if (isset($settings['file']['tmp_name'])) {
            $sql = "SELECT  * FROM user_settings where user_id = " . $userId;
            $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            $results = $results->toArray();
            if (isset($results[0]['avatar'])) {
                @unlink(getcwd() . "/public" . $results[0]['avatar']);
            }

            $path = "/img/avatars";
            $fileName = uniqid();
            $file = $path . '/' . $fileName;
            move_uploaded_file($settings['file']['tmp_name'], getcwd() . "/public/" . $file . $settings['file']['name']);
            if ($this->is_image(getcwd() . "/public/" . $file . $settings['file']['name'])) {
                $settings['avatar'] = $file . $settings['file']['name'];
            } else {
                @unlink(getcwd() . "/public/" . $file . $settings['file']['name']);
            }

        }
        unset($settings["file"]);
        $sql = "SELECT  * FROM user_settings where user_id = " . $userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        if (count($results->toArray())) {
            $this->tableGateway->update($settings, array('user_id' => $userId));
        } else {
            $settings['user_id'] = $userId;
            $this->tableGateway->insert($settings);
        }
        return true;
    }

    public function getCurrentUserSettings()
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT  * FROM user_settings where user_id=" . $userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return $results;
    }

    public function getUserSettings(int $userID)
    {
        $sql = "SELECT  * FROM user_settings where user_id=" . $userID;
        return $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE)->toArray()[0];
    }

    public function searchUsersOnSettings($data)
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $select = new Select();
        $select->from('user_settings');
        $select->columns(array("user_id", "first_name", "second_name", 'avatar', 'job', 'country', 'city', 'phone', 'about'));
        $whereArray = [];
        if ($data) {
            foreach ($data as $key => $value) {
                if (($value != "") && ($key != 'submit')) {
                    $whereArray[$key] = $value;
                }
            }
        }
        $excludeUserWhere = "(user_id <> ".$userId.")";
        $select->where($excludeUserWhere);
        if(count($data))  $select->where($whereArray);
        $resultSetPrototype = new ResultSet();
        $resultSetPrototype->setArrayObjectPrototype(new Settings());
        $users = new DbSelect($select, $this->tableGateway->getAdapter(), $resultSetPrototype);
        return array($users->getItems(0, 1000));
    }

    public function is_image($path)
    {
        $a = getimagesize($path);
        $image_type = $a[2];

        if (in_array($image_type, array(IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_BMP))) {
            return true;
        }
        return false;
    }


}
