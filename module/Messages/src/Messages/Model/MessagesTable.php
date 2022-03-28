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


class MessagesTable
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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("messages", $adapter);
    }

    public function addMessage($request, $adapter)
    {

        $text = htmlspecialchars($request->getPost()->text);
        $text = substr($text, 0, 250);
        $to_user = $request->getPost()->to_user;
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT  first_name,second_name FROM user_settings WHERE user_id = '" . $userId . "'";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $user_info = $resultSet->toArray()[0];
        $date = date_create();
        $date = date_timestamp_get($date);
        $data = array('to_user' => $to_user, 'from_user' => $userId, 'text' => $text, 'date' => $date);
        $this->tableGateway->insert($data);
        $id = $this->tableGateway->lastInsertValue;
        $sql = "INSERT INTO deliver_messages (message_id,dilivered) values ($id,null)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $sql = "insert into notifications (text,html_id,user_id) values /*todo change to transaction methods*/
                ('you have new message from " . $user_info["first_name"] . " " . $user_info["second_name"] . "','test',$to_user)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function getMessagesCounts($userId, $adapter)
    {
        $userId = (int)$userId;
        $sql = "SELECT COUNT(to_user),to_user as user,from_user FROM messages WHERE from_user = '" . $userId . "'  GROUP BY (to_user)";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;

    }

    public function checkNewMessages($adapter)
    {
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT *,messages.id as message_id FROM messages 
        LEFT JOIN deliver_messages on messages.id = deliver_messages.message_id 
        LEFT JOIN user_settings on messages.from_user = user_settings.user_id 
        WHERE to_user = '".$userId."' AND dilivered <=> NULL";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;

    }

    public function checkOldMessages($adapter, $request)
    {
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $with_user = $request->getPost()->with_user;
        $sql = "SELECT *,messages.id as message_id, '" . $userId . "' as 'current_user' FROM messages 
        LEFT JOIN deliver_messages on messages.id = deliver_messages.message_id 
        LEFT JOIN user_settings on messages.from_user = user_settings.user_id 
        WHERE  ((to_user = $userId and from_user = $with_user)  OR  (from_user = $userId and to_user = $with_user))  
        AND dilivered = 1 ORDER BY messages.id ASC LIMIT 20";
        return $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }

    public function markMessagesAsDileverd($messages, $adapter)
    {

        $needMark = array();
        foreach ($messages->buffer() as $message) {
            $needMark[] = $message['message_id'];
        }
        if (count($needMark) >= 1) {
            $lastElement = end($needMark);
            $where = " WHERE ";
            foreach ($needMark as $message) {
                $where .= " message_id = '" . (int)$message . "'";
                if ($message != $lastElement and (count($needMark) > 1)) {
                    $where .= " OR ";
                }
            }
            $sql = "UPDATE deliver_messages set dilivered = 1" . $where;
            $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return $resultSet;
        }

    }


}
