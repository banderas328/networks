<?php

namespace Settings\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;
use Zend\Config\Config;
use Zend\Config\Factory;


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
        $files = $settings["file"];
        if ($files) $settings["file"] = $files;
        if (isset($settings["first_name"][1])) $settings["first_name"] = $settings["first_name"][1];

        if (isset($settings["second_name"][1])) $settings["second_name"] = $settings["second_name"][1];
        if (isset($settings["job"][1])) $settings["job"] = $settings["job"][1];
        if (isset($settings["country"][1])) $settings["country"] = $settings["country"][1];
        if (isset($settings["city"][1])) $settings["city"] = $settings["city"][1];
        if (isset($settings["about"][1])) $settings["about"] = $settings["about"][1];
        if (isset($settings["phone"][1])) $settings["phone"] = $settings["phone"][1];
        if (isset($settings["visibility"][1])) $settings["visibility"] = $settings["visibility"][1];
        $user_session = new Container('user');
        $userId = $user_session->user->id;

        if ($settings['file']['tmp_name']) {
            $sql = "SELECT  * FROM user_settings where user_id=" . $userId;
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
                $data['avatar'] = $file . $settings['file']['name'];
            } else {
                @unlink(getcwd() . "/public/" . $file . $settings['file']['name']);
            }

        }
        $sql = "SELECT  * FROM user_settings where user_id=" . $userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        if ($results->toArray()) {
            $this->tableGateway->update($settings, array('user_id' => $userId));
        } else {
            $data['user_id'] = $userId;
            $this->tableGateway->insert($data);
        }
        return true;
    }

    public function getCurrentUserSettings()
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT  * FROM user_settings where user_id=" . $userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return $results;
    }

    public function getUserSettings(int $userID)
    {
        $sql = "SELECT  * FROM user_settings where user_id=" . $userID;
        return $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE)->toArray()[0];
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