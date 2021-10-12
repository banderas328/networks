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
        if(isset($settings[0])) {
            $files = $settings["file"];
            $settings = $settings[0];
            $settings["file"] = $files;
        }
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $data = array(
            'first_name' => $settings['first_name'],
            'second_name' => $settings['second_name'],
            'job' => $settings['job'],
            'country' => $settings['country'],
            'city' => $settings['city'],
            'about' => $settings['about'],
            'skype' => $settings['skype'],
            'phone' => $settings['phone'],
            'site' => $settings['site'],
            'visibility' => $settings['visibility'],
        );

        if($settings['file']['tmp_name']) {
            $sql = "SELECT  * FROM user_settings where user_id=".$userId;
            $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
             $results = $results->toArray();
            if(isset($results[0]['avatar'])) {
                @unlink(getcwd(). "/public".$results[0]['avatar']);
            }

            $path =  "/img/avatars";
            $fileName = uniqid();
            $file = $path. '/' .$fileName;
            move_uploaded_file($settings['file']['tmp_name'], getcwd(). "/public/". $file.$settings['file']['name']);
            if($this->is_image(getcwd(). "/public/".$file.$settings['file']['name'])) {
                       $data['avatar'] = $file.$settings['file']['name'];
            }
            else {
                @unlink(getcwd(). "/public/".$file.$settings['file']['name']);
            }

        }
        $sql = "SELECT  * FROM user_settings where user_id=".$userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        if ($results->toArray()) {
            $this->tableGateway->update($data, array('user_id' => $userId));
        } else {
            $data['user_id'] = $userId;
            $this->tableGateway->insert($data);
        }
    return true;
    }
    public function getCurrentUserSettings(){
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT  * FROM user_settings where user_id=".$userId;
        $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return $results;
    }
    public function getUserSettings(int $userID){
        $sql = "SELECT  * FROM user_settings where user_id=".$userID;
        return $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE)->toArray()[0];
    }
 public   function is_image($path)
    {
        $a = getimagesize($path);
        $image_type = $a[2];

        if(in_array($image_type , array(IMAGETYPE_GIF , IMAGETYPE_JPEG ,IMAGETYPE_PNG , IMAGETYPE_BMP)))
        {
            return true;
        }
        return false;
    }




}