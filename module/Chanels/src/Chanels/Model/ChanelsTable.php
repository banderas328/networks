<?php
namespace Chanels\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class ChanelsTable
{
    protected $tableGateway;

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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("chanels",$adapter);
    }

    public function fetchAllPublic()
    {
        $resultSet = $this->tableGateway->select(array('private' => 0));
        return $resultSet;
    }
    public function fetchAllPrivate($adapter)
    {

        $sql = "SELECT  * FROM chanels left join private_chanels_requests on chanels.id = private_chanels_requests.chanel_id  WHERE chanels.private = 1 group by chanels.id";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }
    public function fetchAllPrivateRequests($adapter)
    {

        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT  * FROM chanels
        left join private_chanels_requests on chanels.id = private_chanels_requests.chanel_id
        Left join chanels_admins on chanels.id = chanels_admins.chanel_id
        left join user_settings on private_chanels_requests.user_id = user_settings.user_id
        WHERE chanels.private = 1 and chanels_admins.admins = ".$userId." group by chanels.id";
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
    }

    public function checkIsUserIsChanelAdmin($adapter,$request) {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $chanel_id = (int) $request->getPost()->chanel_id;
        $sql = "SELECT * FROM chanels_admins WHERE chanel_id=".$chanel_id." AND admins=".$userId;
        $resultSet =  $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if(!empty($resultSet->toArray())) return true;
        return false;


    }
    public function denyAccessUserToChanel($adapter,$request) {
        $chanel_id = (int) $request->getPost()->chanel_id;
        $userId = (int) $request->getPost()->user_id;
        $sql = "UPDATE private_chanels_requests set confirmed = 0 where chanel_id=".$chanel_id." and user_id=".$userId;
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }
    public function allowAccessUserToChanel($adapter,$request) {
        $chanel_id = (int) $request->getPost()->chanel_id;
        $userId = (int) $request->getPost()->user_id;
        $sql = "UPDATE private_chanels_requests set confirmed = 1 where chanel_id=".$chanel_id." and user_id=".$userId;
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }
    public function checkIsChanelPrivate($adapter,$request){
        $chanel_id = (int) $request->getPost()->chanel_id;
        $sql = "SELECT * FROM chanels WHERE id=".$chanel_id." and private = 1";
        $resultSet =  $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if(!$resultSet->toArray()) return false;
        return true;
    }

    public function checkUserHaveAccessToChanel($adapter,$request){

        $chanel_id = (int) $request->getPost()->chanel_id;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "SELECT * FROM private_chanels_requests WHERE chanel_id=".$chanel_id." and user_id=".$userId." and confirmed=1";
        $resultSet =  $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        if(!$resultSet->toArray()) return false;
        return true;
    }

    public function addRequestToChanel($request,$adapter) {
        $to_chanel = (int) $request->getPost()->to_chanel;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $sql = "INSERT INTO private_chanels_requests (user_id,chanel_id) values ($userId,$to_chanel)";
        $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
    }

}