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
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $data = ["project_name" => $project_name,"project_description" => $project_description];
        $this->tableGateway->insert($data);
        $projectID = $this->tableGateway->lastInsertValue;

        $memberList = $request->getPost()->members_list;
        $memberList[] = $userId;
        $projectMembersTable = new \Tasks\Model\ProjectMemberTable();
        if (count($memberList)) {
            foreach ($memberList as $member) {
                $projectMembersTable->saveMemberToProject(['user_id' =>$member,"project_id" => $projectID]);
                /*todo change to transaction methods*/
                $sql = "insert into notifications (text,html_id,user_id) values ('you have new project:  " . $project_name . "','test',".$member.")";
                $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            }
        }
        return true;
    }

    public function getProjects(){
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id 
                WHERE projects_members.user_id='".$userId."' and is_archive = '0' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $projects =   $resultSet->toArray();
        return $projects;
    }

    public function getArchiveProjects(){
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id 
                WHERE projects_members.user_id='".$user_id."' and is_archive = '1' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $projects =   $resultSet->toArray();
        return $projects;

    }

    public function daleteProject($request){
        $project_id =  $request->getPost()->id;
        $tasksTable = new TasksTable();
        $tasks = $tasksTable->getTasksForProject($project_id);
        foreach ($tasks as $task_key => $task_value){
            foreach ($task_value as $task_body) {
                $tasksTable->deleteTask($task_body["id"]);
            }

        }
        $delete_sql = "DELETE FROM projects where id=".$project_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $delete_sql = "DELETE FROM projects_members where project_id=".$project_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);


    }

    public function updateProjectsInBoard($request){
        $projects_list = $request->getPost()->projects_list;
        foreach ($projects_list as $project) {
            $this->tableGateway->update($project, ['id' => $project["id"]]);
        }
    }

    public function updateProject(array $data){
        $this->tableGateway->update($data, ['id' => $data["id"]]);
    }
}


