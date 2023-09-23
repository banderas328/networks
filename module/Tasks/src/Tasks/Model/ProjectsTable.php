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
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("projects", $adapter);
        $this->adapter = $adapter;
    }

    public function addUserToProject($project_id, $user_id)
    {
        $sql = "delete from projects_members where user_id=" . $user_id . " and project_id=" . $project_id;
        $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $sql = "insert into projects_members (user_id,project_id) values (" . $user_id . "," . $project_id . ")";
        $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        die();
    }

    public function createProject($request)
    {
        $project_name = $request->getPost()->project_name;
        $project_description = $request->getPost()->project_description;
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $data = ["project_name" => $project_name, "project_description" => $project_description];
        $this->tableGateway->insert($data);
        $projectID = $this->tableGateway->lastInsertValue;

        $memberList = $request->getPost()->members_list;
        $memberList[] = $userId;
        $projectMembersTable = new \Tasks\Model\ProjectMemberTable();
        if (count($memberList)) {
            foreach ($memberList as $member) {
                $projectMembersTable->saveMemberToProject(['user_id' => $member, "project_id" => $projectID]);
                $sql = "insert into notifications (text,html_id,user_id) values ('you have new project:  " . $project_name . "','test'," . $member . ")";
                $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
            }
        }
        return true;
    }

    public function getProjectMembers($project_id)
    {
        $sql = "SELECT * FROM `projects_members`
                left join projects on projects_members.project_id = projects.id
                left join user_settings on projects_members.user_id = user_settings.user_id
                WHERE projects_members.project_id='" . $project_id . "'
                and is_archive = '0' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $members = $resultSet->toArray();
        return $members;
    }

    function deleteUserFromProjectMembers(int $project_id, int $user_id)
    {
        $sql = "delete from `projects_members` where project_id=" . $project_id . " and user_id=" . $user_id;
        return $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
    }

    public function getProjects()
    {
//         session_start();
//         $user_session = $_SESSION['user'];
//         $userId = $user_session["id"];
//         $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id
//                 WHERE projects_members.user_id='" . $userId . "' and is_archive = '0' order by projects.sort_order";
         $sql = "SELECT * FROM  projects WHERE  is_archive = '0' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $projects = $resultSet->toArray();
        return $projects;
    }

    public function getArchiveProjects()
    {
        session_start();
        $user_session = $_SESSION['user'];
        $user_id = $user_session["id"];
        $sql = "SELECT * FROM `projects_members` left join projects on projects_members.project_id = projects.id
                WHERE projects_members.user_id='" . $user_id . "' and is_archive = '1' order by projects.sort_order";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $projects = $resultSet->toArray();
        return $projects;

    }

    public function daleteProject($request)
    {
        $project_id = $request->getPost()->id;
        $tasksTable = new TasksTable();
        $tasks = $tasksTable->getTasksForProject($project_id);
        foreach ($tasks as $task_key => $task_value) {
            foreach ($task_value as $task_body) {
                $tasksTable->deleteTask($task_body["id"]);
            }
        }
        $delete_sql = "DELETE FROM projects where id=" . $project_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $delete_sql = "DELETE FROM projects_members where project_id=" . $project_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
    }

    public function updateProjectsInBoard($request)
    {
        $projects_list = $request->getPost()->projects_list;
        foreach ($projects_list as $project) {
            $this->tableGateway->update($project, ['id' => $project["id"]]);
        }
    }

    public function updateProject(array $data)
    {
        $this->tableGateway->update($data, ['id' => $data["id"]]);
    }

    public function getProjectReport($data)
    {
        session_start();
        if(!$_SESSION['user']) die("only for logged in users"); //TODO possibly personal info ?
        $project_id = (int)$data["project_id"];
        $start_date = strtotime($data["start_date"]);
        $end_date = strtotime($data["end_date"]);
        $sql = "select * from projects

                         left join boards on projects.id = boards.project_id
                         left join tasks on boards.id = tasks.board_id
                         left join task_time on tasks.id = task_time.task_id
                         left join user_settings on task_time.user_id = user_settings.user_id
                         where task_time.date >= $start_date and task_time.date <= $end_date and projects.id = $project_id
                         ";
       $data = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE)->toArray();
       $report_array = [];
        foreach ($data as $data_key => $data_value) {
            $project_name = $data_value["project_name"];
            $task_name = $data_value["name"];
            $estimate = $data_value["estimate"];
            $name = $data_value["first_name"] . " " . $data_value["second_name"];
            $user_id = $data_value["user_id"];
            $report_array[$project_name][$task_name]["hours"] += (int)$data_value["hours"];
            $report_array[$project_name][$task_name]["estimate"] = $estimate;
            $report_array[$project_name][$task_name]["user_name"] = $name;
            $report_array[$project_name][$task_name]["project_name"] = $project_name;
        }
        $final_report = [];
//        foreach ($report_array as $report_task_key => $report_task_value) {
//            foreach ($report_task_value as $task_key => $task_value) {
//                foreach ($task_value as $task_name =>$task_detail) {
//                    $final_report[] = ["value" => [$task_detail["estimate"], $task_detail['hours']],
//                        'color' => ['#05e1a3', '#059669'],
//                        'labelColor' => ['black', 'black'],
//                        'barLabel' => $task_name,
//                    ];
//                }
//            }
//        }

        return $report_array;
    }
}


