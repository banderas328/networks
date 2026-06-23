<?php
namespace Preloader\Model;


class preloaderModel
{

 
    public function getAdapter()
    {
        $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        return $adapter;

    }

    public static function getUserId($userId) {
        if(!$userId) {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
            $user_session = $_SESSION['user'];
            $userId = $user_session["id"];
        }
        return $userId;



    }
}