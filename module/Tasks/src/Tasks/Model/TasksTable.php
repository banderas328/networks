<?php

namespace Tasks\Model;

use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;


class TasksTable
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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("tasks", $adapter);
        $this->adapter = $adapter;
    }

    public function createTask(array $data)
    {
        $memberList = $data["members_list"];
        $data["to_directory"] = 0;
        $fileTable = new \Files\Model\FilesTable;
        if (isset($data['file']['tmp_name'])) $fileID = $fileTable->saveUserFile($data);
        $task_name = $data["task_name"];
        $description = $data["task_description"];
        $project_id = (int)$data["project_id"];
        $sql = "SELECT MIN(tasks.board_id) AS board_id  FROM tasks 
                left join boards on boards.id = tasks.board_id 
                left join projects on boards.project_id = projects.id WHERE projects.id=" . $project_id;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $board_id = $resultSet->toArray()[0]['board_id'];
        $data = [
            "description" => $description,
            "name" => $task_name,
            "status" => "new",
            "board_id" => $board_id,
        ];
        $this->tableGateway->insert($data);
        $taskID = $this->tableGateway->lastInsertValue[0];
        if (isset($fileID)) {
            $dataFile["file_id"] = $fileID;
            $dataFile["task_id"] = $taskID;
            $fileTable = new \Tasks\Model\TasksFilesTable();
            $fileTable->saveFileToTask($dataFile);
        }
        $memberList = explode(",", $memberList);
        $taskMemebrsTable = new \Tasks\Model\TasksMembersTable();
        if (count($memberList)) {
            foreach ($memberList as $member) {
                $taskMemebrsTable->saveMemberToTask(['user_id' => (int)$member, "task_id" => $taskID]);
            }
        }
    }

    public function getTasksForProject(int $project_id)
    {
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT  tasks.name,tasks.sort_order,tasks.board_id,tasks.id FROM tasks 
                left join boards on boards.id = tasks.board_id 
                left join projects on boards.project_id = projects.id
                left join projects_members on projects_members.project_id = projects.id
                WHERE projects_members.project_id='" . $project_id . "' and projects_members.user_id = " . $user_id;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $tasks = $resultSet->toArray();
        $columns = [];
        foreach ($tasks as $task) {
            $columns[$task["board_id"]][] = $task;
        }
        foreach ($columns as &$column) {
            usort($column, array($this, 'taskSort'));
        }
        return $columns;
    }

    private static function taskSort($a, $b)
    {
        $key = 'sort_order';
        if ($a[$key] < $b[$key]) {
            return -1;
        } else if ($a[$key] > $b[$key]) {
            return 1;
        }
        return 0;
    }

    public function updateATasksInBoard($request){
        $task_list = $request->getPost()->task_list;
        foreach ($task_list as $task) {
            var_dump($task);
            $this->tableGateway->update($task, ['id' => $task["id"]]);
        }
    }
}


