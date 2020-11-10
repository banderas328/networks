<?php
namespace Messages\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Form\Element\DateTime;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Zend\Db\Sql\Select;
use Zend\Config\Config;
use Zend\Config\Factory;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class MessagesTable {
	protected $tableGateway;

	public function __construct() {
	    $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
	    $adapter = new \Zend\Db\Adapter\Adapter (array(
	        'driver' => $config->database->driver,
	        'dsn' => $config->database->dsn,
	        'database' => $config->database["params"]->database,
	        'username' => $config->database["params"]->username,
	        'password' => $config->database["params"]->password,
	    ));
	    $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("messages",$adapter);
	}

    public function addMessage($request,$adapter){

        $text = $request->getPost()->text;
        $text  = substr ($text,0,250);
        $to_user = $request->getPost()->to_user;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $date = date_create();
        $date = date_timestamp_get($date);
        $data = array('to_user' => $to_user,'from_user' => $userId,'text'=>$text,'date' => $date);
        $this->tableGateway->insert($data);
        $id = $this->tableGateway->lastInsertValue;
        $sql = "INSERT INTO deliver_messages (message_id,dilivered) values ($id,null)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function getMessagesCounts($userId,$adapter) {
        $sql = "SELECT COUNT(to_user),to_user as user,from_user FROM messages WHERE from_user = '".$userId."'  GROUP BY (to_user)";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;

    }
    public function checkNewMessages($adapter){
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT *,messages.id as message_id FROM messages LEFT JOIN deliver_messages on messages.id = deliver_messages.message_id LEFT JOIN user_settings on messages.from_user = user_settings.user_id WHERE to_user = '".$userId."' AND dilivered <=> NULL";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;

    }

    public function checkOldMessages($adapter){
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT *,messages.id as message_id FROM messages LEFT JOIN deliver_messages on messages.id = deliver_messages.message_id LEFT JOIN user_settings on messages.from_user = user_settings.user_id WHERE  (to_user = $userId OR from_user = $userId)  AND dilivered = 1 ORDER BY messages.date ASC LIMIT 20";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }
    public function markMessagesAsDileverd($messages,$adapter){

        $needMark = array();
        foreach($messages as $message) {
            $needMark[] = $message['message_id'];
        }
//        $user_session = new Container('user');
//        $userId = $user_session->user->id;
        if(count($needMark) >= 1)
        {
            $lastElement = end($needMark);
            $where = " WHERE ";
            foreach ($needMark as $message) {
                    $where .= " message_id = '" . $message . "'";
                    if($message != $lastElement and (count($needMark) > 1)) {
                        $where .= " OR ";
                }
            }
            $sql = "UPDATE deliver_messages set dilivered = 1".$where;
            $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return $resultSet;
        }

    }



}