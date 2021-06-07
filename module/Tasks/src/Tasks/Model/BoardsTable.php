<?php
namespace Tasks\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
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
    
    public function createBoard($request, $adapter) {
        
        $board_name =  $request->getPost()->board_name;
        $user_session = new Container('user');
        $admin = $user_session->user->id;
        $data = ["admin" => $admin,"name" => $board_name];
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
}
    
    
