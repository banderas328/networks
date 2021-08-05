<?php

namespace Tasks\Model;

use Zend\InputFilter\Factory as InputFactory;

// <-- Add this import
use Zend\InputFilter\InputFilter;

// <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;

// <-- Add this import
use Zend\InputFilter\InputFilterInterface;
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

    public function createTask($data)
    {
        $memberList = $data["members_list"];
        $data["to_directory"] = 0;
        $fileTable = new \Files\Model\FilesTable;
        if (isset($data['file']['tmp_name'])) $fileID = $fileTable->saveUserFile($data);


        $task_name = $data["task_name"];
        $description = $data["task_description"];
        $data = [
            "description" => $description,
            "name" => $task_name,
            "status" => "new",
            "parent_task" => 0,
            "is_archive" => 0//for main ticket its 0 and id parent for others
        ];
        $this->tableGateway->insert($data);
        $taskID = $this->tableGateway->lastInsertValue;
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
                $taskMemebrsTable->saveMemberToTask(['user_id' => $member, "task_id" => $taskID]);
            }
        }


    }

    public function getTasksForBoard($boardId)
    {
        $user_session = new Container('user');
        $user_id = $user_session->user->id;
        $sql = "SELECT  * FROM tasks  WHERE board_id='".$boardId."'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $boards = $resultSet->toArray();
        return $boards;
    }
}


