<?php
namespace Chanels\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
use Zend\InputFilter\InputFilterInterface;
use Zend\Session\Container;
class ChanelsMessagesTable
{

    protected $tableGateway;

    public function __construct($tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function addMessageToChanel($request,$adapter){
        $text = $request->getPost()->text;
        $text  = substr ($text,0,250);
        $to_chanel = (int) $request->getPost()->to_chanel;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $date = date_create();
        $date = date_timestamp_get($date);
        $data = array('to_chanel' => $to_chanel,'from_user' => $userId,'message'=>$text,'date' => $date);
        $this->tableGateway->insert($data);
        $id = $this->tableGateway->lastInsertValue;
        $sql = "INSERT INTO chanels_deliver_messages (message_id,delivered) values ($id,null)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function checkNewMessages($adapter,$request){
        $to_chanel = (int) $request->getPost()->to_chanel;
        $date =  (int) $request->getPost()->date;
        $sql = "SELECT *,chanels_messages.id as message_id FROM chanels_messages
        LEFT JOIN chanels_deliver_messages on chanels_messages.id = chanels_deliver_messages.message_id
         LEFT JOIN user_settings on chanels_messages.from_user = user_settings.user_id
          LEFT JOIN chanels on chanels_messages.to_chanel = chanels.id
           WHERE to_chanel = '".$to_chanel."'
            AND chanels.private = 0
            AND chanels_messages.date > $date order by chanels_messages.date ASC ";
        if($date == false) {
            $sql .= "limit 1";
        }
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;

    }
}