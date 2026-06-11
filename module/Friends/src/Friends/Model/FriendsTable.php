<?php
namespace Friends\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Zend\Config\Config;
use Zend\Config\Factory;

class FriendsTable {
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
	    $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("friends",$adapter);

	}

	public function addFriendRequest($userId,$friendId,$adapter) {
        $sql = new Sql($adapter);
        $select = $sql->select();
        $select->from('friends')
            ->join(array('user_settings' => 'user_settings'),     // join table with alias
                'friends.user_id = user_settings.user_id');
        $select->where(array('friends.user_id' => $userId,'friends.friend_id' => $friendId));
        $selectString = $sql->getSqlStringForSqlObject($select);
        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
        if($results->count() > 0 ) {
            die(json_encode('have'));
        }
        $newData = array(
            'user_id'=> $userId,
            'friend_id'=> $friendId,
            'status'=> '0'
        );
        $results = $this->tableGateway->insert($newData);
        return $results;
	}
    public function addFriend($userId,$friendId,$adapter) {
        $userId =  (string) $userId;
        $friendId =  (string) $friendId;
        $data = array (
            'status' => 1

        );
        if($this->tableGateway->update($data, array('user_id' => $friendId , 'friend_id' => $userId))) {
            return true;
        }
        else {
            return false;
        }
    }
    public function cancelFriend($userId,$friendId,$adapter) {
        $userId =  (string) $userId;
        $friendId =  (string) $friendId;
        $data = array (
            'status' => 0

        );
        if($this->tableGateway->update($data, array('user_id' =>  $userId, 'friend_id' => $friendId))) {
            return true;
        }
        else {
            return false;
        }
    }


    public function getRequests($userId,$adapter){

        $sql = new Sql($adapter);
        $select = $sql->select();
        $select->from('friends')
             ->join(array('user_settings' => 'user_settings'),     // join table with alias
            'friends.user_id = user_settings.user_id');
        $select->where(array('friends.friend_id' => $userId,"status" => 0));
        $selectString = $sql->getSqlStringForSqlObject($select);
        $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
        return $results;
    }

    public function getFriends($userId,$adapter,$onlyIds = false){
        $requestUser = $userId;
        $sql = "SELECT * FROM friends WHERE status = 1";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $userIds = array();
        $needIds = array();
        foreach($resultSet->toArray() as $row) {
            if(!in_array($row['user_id'],$userIds)) array_push($userIds,$row['user_id']);
            if(!in_array($row['friend_id'],$userIds)) array_push($userIds,$row['friend_id']);
        }
        $needIds = $userIds;
        $needIds[] = $userId;
        if(count($needIds) >= 1)
        {
            $lastElement = end($needIds);
            $where = " WHERE user_id in ( ";
            foreach ($needIds as $user) {
                    $where .=  $user ;
                    if($user != $lastElement) {
                        $where .= " , ";
                    }
            }
            $where .= " ) ";
            $sql = "SELECT * FROM user_settings ";
            $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            return $resultSet;
        }
        return false;

    }

    public function isUsersFriends($userId,$friendId,$adapter) {
        $userId = (int) $userId;
        $friend_id = (int) $friendId;
        $sql = "SELECT * FROM friends where (user_id =".$userId." and friend_id = ".$friend_id.") or (user_id = ".$friend_id." and friend_id = ".$userId.")";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }






}