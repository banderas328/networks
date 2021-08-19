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
//        $user_session = new Container('user');
        $data = ["name" => $board_name,"project_id" => $project_id];
        $this->tableGateway->insert($data);       
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
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id
                left join boards on projects.id = boards.project_id
                WHERE projects_members.user_id='".$user_id."' and boards.project_id = '".$project_id."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $boards =   $resultSet->toArray();
        return $boards;
    }
    public function deleteBoard($request) {
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $board_id =  (int)$request->getPost()->board_id;
        $project_id=  (int)$request->getPost()->project_id;
        $sql = "SELECT min(boards.id) as board_id FROM `projects_members` left join projects on projects_members.project_id = projects.id
                left join boards on projects.id = boards.project_id
                WHERE projects_members.user_id='".$user_id."' and boards.project_id = '".$project_id."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $board_id_new =   $resultSet->toArray()[0]["board_id"];
        $sql = "update tasks set board_id =".$board_id_new." where board_id=".$board_id;
        $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $data = ["id" => $board_id];
        $this->tableGateway->delete($data);




    }
}
    
    
