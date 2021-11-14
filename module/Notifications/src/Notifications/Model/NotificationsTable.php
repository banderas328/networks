<?php
namespace Notifications\Model;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class NotificationsTable
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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("notifications",$adapter);
        $this->adapter = $adapter;
    }
    
    public function createNotification($data) {
        $text =  $data["text"];
        $html_id  =  $data["html_id"];
        $user_id  =  $data["user_id"];
        $data = ["text" => $text,"html_id" => $html_id,'user_id' => $user_id];
        $this->tableGateway->insert($data);
    }

    public function getNotifications(){
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "select * from notifications where user_id = ".$user_id." order by id desc limit 20 ";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return  $resultSet->toArray();
    }





}
    
    
