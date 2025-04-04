<?php
namespace Tasks\Model;
use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class BoardsTable
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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("boards",$adapter);
        $this->adapter = $adapter;
    }

    public function createBoard($request) {
        $board_name =  $request->getPost()->board_name;
        $project_id =  $request->getPost()->project_id;
        $data = ["name" => $board_name,"project_id" => $project_id];
        $this->tableGateway->insert($data);
    }

    public function createBoardFromArray(array $data){
        $this->tableGateway->insert($data);
        return $this->tableGateway->lastInsertValue;
    }

//    public function getBoards(){
//        $user_session = new Container('user');
//        $user_id = $user_session->user->id;
//        $sql = "SELECT  * FROM board_users left join boards on board_users.board_id = boards.id   WHERE user_id='".$user_id."'";
//        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
//        $boards =   $resultSet->toArray();
//        return $boards;
//    }
    public function getProjectBoards($request){
        $project_id =  (int)$request->getPost()->project_id;
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();

        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
//         $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id
//                 left join boards on projects.id = boards.project_id
//                 WHERE projects_members.user_id='".$userId."' and boards.project_id = '".$project_id."'";
         $sql = "SELECT * FROM  projects 
                 left join boards on projects.id = boards.project_id
                 WHERE  boards.project_id = '".$project_id."' and boards.is_deleted IS NULL";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $boards =   $resultSet->toArray();
        return $boards;
    }
    public function deleteBoard($request) {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $board_id =  (int)$request->getPost()->board_id;
        $project_id=  (int)$request->getPost()->project_id;
        $sql = "SELECT min(boards.id) as board_id FROM `boards` 
                left join projects on boards.project_id = projects.id
                WHERE  boards.project_id = '".$project_id."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $board_id_new =   $resultSet->toArray()[0]["board_id"];
        $sql = "update tasks set is_archive = 1 where board_id=".$board_id;
        $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $data = ["id" => $board_id];
        //$this->tableGateway->delete($data);
        $this->tableGateway->update(["is_deleted" => 1],$data);
    }
}


