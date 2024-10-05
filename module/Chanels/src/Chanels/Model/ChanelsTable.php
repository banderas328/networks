<?php
namespace Chanels\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;
use Zend\Db\Sql\Sql;

class ChanelsTable
{

    protected $tableGateway;

    protected $adapter;

    public function __construct()
    {
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter(array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password
        ));
        $this->adapter = $adapter;
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("chanels", $adapter);
    }

    public function fetchAllPublic()
    {
     $sql = "SELECT chanels.id as chanel_id,chanels.chanel_name,user_settings.first_name,user_settings.second_name,user_settings.avatar
        from chanels
        left join chanels_admins on chanels_admins.chanel_id = chanels.id
                
         left join user_settings on chanels_admins.admins = user_settings.user_id
         WHERE chanels.private = 0 group by chanels.chanel_name";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }

    public function fetchAllPrivate($adapter, $user_id)
    {
        $sql = "SELECT chanels.id as chanel_id,chanels.chanel_name,user_settings.first_name,user_settings.second_name,user_settings.avatar,
        chanels_admins.admins , private_chanels_requests.is_confirmed,private_chanels_requests.pending_response , private_chanels_requests.user_id as user_id
        FROM  chanels
        left join chanels_admins on chanels_admins.chanel_id = chanels.id
        left join user_settings on chanels_admins.admins = user_settings.user_id
        left join private_chanels_requests on private_chanels_requests.user_id = private_chanels_requests.user_id
        WHERE chanels.private = 1 group by chanels.chanel_name";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }

    public function fetchAllChanelsInAdminRole()
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT * FROM chanels_admins 
                left join chanels on chanels.id = chanels_admins.chanel_id
                where chanels_admins.admins=" . $userId;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        return $resultSet->toArray();
    }

    public function fetchAllPrivateRequests($adapter)
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT  * FROM chanels
        left join private_chanels_requests on chanels.id = private_chanels_requests.chanel_id
        Left join chanels_admins on chanels.id = chanels_admins.chanel_id
        left join user_settings on private_chanels_requests.user_id = user_settings.user_id
        WHERE chanels.private = 1 and private_chanels_requests.pending_response = 1 and chanels_admins.admins = " . $userId . " ";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }

    public function checkIsUserIsChanelAdmin($adapter, $request)
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $chanel_id = (int) $request->getPost()->chanel_id;
        $sql = "SELECT * FROM chanels_admins WHERE chanel_id=" . $chanel_id . " AND admins=" . $userId;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if (! empty($resultSet->buffer()->toArray()))
            return true;
        return false;
    }

    public function denyAccessUserToChanel($adapter, $request)
    {
        $chanel_id = (int) $request->getPost()->chanel_id;
        $userId = (int) $request->getPost()->user_id;
        $sql = "UPDATE private_chanels_requests set is_confirmed = 0,pending_response = 0 where chanel_id=" . $chanel_id . " and user_id=" . $userId;
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function allowAccessUserToChanel($adapter, $request)
    {
        $chanel_id = (int) $request->getPost()->chanel_id;
        $userId = (int) $request->getPost()->user_id;
        $sql = "UPDATE private_chanels_requests set is_confirmed = 1,pending_response = 0 where chanel_id=" . $chanel_id . " and user_id=" . $userId;
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function checkIsChanelPrivate($adapter, $request)
    {
        $chanel_id = (int) $request->getPost()->chanel_id;
        $sql = "SELECT * FROM chanels WHERE id=" . $chanel_id . " and private = 1";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if (! $resultSet->toArray())
            return false;
        return true;
    }

    public function checkUserHaveAccessToChanel($adapter, $request)
    {
        $chanel_id = (int) $request->getPost()->to_chanel;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        
        $sql = "SELECT * FROM private_chanels_requests WHERE chanel_id=" . $chanel_id . " and user_id=" . $userId . " and is_confirmed=1";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if (! $resultSet->buffer()->toArray()) {
            $sql = "SELECT * FROM chanels_admins WHERE admins=" . $userId;
            $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            if (! $resultSet->buffer()->toArray()) {
                
                return false;
            }
        }
        return true;
    }

    public function addRequestToChanel($request, $adapter)
    {
        $to_chanel = (int) $request->getPost()->to_chanel;
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "delete from  private_chanels_requests where user_id =" . $userId . " and chanel_id=" . $to_chanel . " ;";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $sql = "INSERT INTO private_chanels_requests (user_id,chanel_id,is_confirmed,pending_response) values ($userId,$to_chanel,null,1)";
        return $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

    public function createChanel($request, $adapter)
    {
        $chanel_name = $request->getPost()->chanel_name;
        $is_private = (int) $request->getPost()->is_private;
        $data = [
            'chanel_name' => $chanel_name,
            'private' => $is_private
        ];
        $this->tableGateway->insert($data);
        $chanelId = $this->tableGateway->lastInsertValue;
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "INSERT INTO chanels_admins (admins,chanel_id) values ($userId,$chanelId)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        $sql = "INSERT INTO private_chanels_requests (user_id,chanel_id,is_confirmed) values ($userId,$chanelId,1)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        die("chanel created");
    }
    
    public function deleteChanel($request,$userId){
        $chanelId = (int)$request->getPost()["chanel_id"];
        $sql = "SELECT * FROM chanels_admins
                left join chanels on chanels.id = chanels_admins.chanel_id
                where chanels_admins.admins = " . $userId ." AND chanels_admins.chanel_id = ".$chanelId;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
      
        foreach ($resultSet->toArray() as $chanel) {
            $sql = "SELECT * FROM chanels_messages
                left join chanels_deliver_messages on chanels_messages.id = chanels_deliver_messages.message_id
                where chanels_messages.id = ".$chanelId;
            $messages= $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            foreach ($messages as $message) {
                $sql = "delete FROM chanels_messages where chanels_messages.id = ".$message["message_id"];
                $messages= $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
                $sql = "DELETE FROM chanels_deliver_messages where chanels_deliver_messages.message_id = ".$message["message_id"];
                $messages= $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            }
            $sql = "delete FROM chanels where chanels.id = ".$chanelId;
            $messages= $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            $sql = "delete FROM chanels_admins where chanels_admins.chanel_id = ".$chanelId;
            $messages= $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);

        }
        
        return "chanel deleted";
    }

}
