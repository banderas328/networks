<?php
namespace Tasks\Model;
use Zend\InputFilter\Factory as InputFactory;     
use Zend\InputFilter\InputFilter;                 
use Zend\InputFilter\InputFilterAwareInterface;   
use Zend\InputFilter\InputFilterInterface;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class ProjectsTable
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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("projects",$adapter);
        $this->adapter = $adapter;
    }
    
    public function createProject($request) {
        $project_name =  $request->getPost()->project_name;
        $project_description =  $request->getPost()->project_description;
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $data = ["project_name" => $project_name,"project_description" => $project_description];
        $this->tableGateway->insert($data);
        $projectID = $this->tableGateway->lastInsertValue;

        $memberList = $request->getPost()->members_list;
        $memberList[] = $userId;
        $projectMembersTable = new \Tasks\Model\ProjectMemberTable();
        if (count($memberList)) {
            foreach ($memberList as $member) {
                $projectMembersTable->saveMemberToProject(['user_id' =>$member,"project_id" => $projectID]);
            }
        }
        return true;
    }
    
    public function getProjects(){
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id WHERE projects_members.user_id='".$user_id."' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $projects =   $resultSet->toArray();
        return $projects;
    }

    public function updateProjectsInBoard($request){
        $projects_list = $request->getPost()->projects_list;
        foreach ($projects_list as $project) {
            var_dump($project);
            $this->tableGateway->update($project, ['id' => $project["id"]]);
        }


    }
}
    
    
