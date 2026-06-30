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
    //Colonel Tokarev idea. - move auth method to top level model
    public static function getUserId($userId) : int /* another one remote idea */ {
        if(!$userId) {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        if(!isset($_SESSION['user'])) die("invalid user");
            $user_session = $_SESSION['user'];
            $userId = $user_session["id"];
            if(!$userId) die("invalid user");
        }
        return $userId;



    }
}