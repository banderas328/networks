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
        $user_session = new Container('user');
        $data = ["name" => $board_name,"project_id" => $project_id];
        $this->tableGateway->insert($data);       
    }
    
    public function getBoards(){
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT  * FROM board_users left join boards on board_users.board_id = boards.id   WHERE user_id='".$user_id."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $boards =   $resultSet->toArray();
        return $boards;
    }
    public function getProjectBoards($request){
        $project_id =  (int)$request->getPost()->project_id;
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT * FROM `project_members` left join projects on project_members.project_id = projects.id
                left join boards on projects.id = boards.project_id
                WHERE project_members.user_id='".$user_id."' and boards.project_id = '".$project_id."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $boards =   $resultSet->toArray();

        return $boards;




    }
}
    
    
