<?php
namespace Tasks\Model;

use Files\Model\FilesTable;
use Zend\Session\Container;
use Notifications\Model\NotificationsTable;
use Zend\Config\Config;
use Zend\Config\Factory;

class TasksTable
{

    protected $tableGateway;

    protected $adapter;

    public function __construct()
    {
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter(array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password
        ));
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("tasks", $adapter);
        $this->adapter = $adapter;
    }

    public function createTask(array $data)
    {
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $memberList = $data["members_list"];
        $estimate = (int) $data["estimate"];
        $memberList .= "," . $userId;
        $data["to_directory"] = 0;
        $fileTable = new \Files\Model\FilesTable();
        // var_dump($data['files']);
        $fileIDs = [];
        $i = 0;
        foreach ($data['files']['name'] as $files_value) {
            $fileId =  $fileTable->saveUserFile([["file" => [
                "name" => $data['files']["name"][$i],
                "tmp_name" => $data['files']["tmp_name"][$i],
                "type" => $data['files']["type"][$i]
            ]]]);
            $fileIDs['file'][] =  [
                "file_id" => $fileId
            ];
            $i++;
        }
        
        $task_name = $data["task_name"];
        $description = $data["task_description"];
        $project_id = (int) $data["project_id"];
        $sql = "SELECT MIN(boards.id) AS board_id  FROM boards WHERE boards.project_id=" . $project_id;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $board_id = $resultSet->toArray()[0]['board_id'];
        if (! $board_id) {
            $data = [
                "name" => "todo",
                "project_id" => $project_id
            ];
            $board = new BoardsTable();
            $board_id = (int) $board->createBoardFromArray($data);
        }
        $data = [
            "description" => $description,
            "name" => $task_name,
            "estimate" => $estimate,
            "status" => "new",
            "board_id" => $board_id
        ];
        $this->tableGateway->insert($data);
        $taskID = $this->tableGateway->lastInsertValue;
        if ($fileIDs) {
            $fileTable = new \Tasks\Model\TasksFilesTable();
            foreach ($fileIDs["file"] as $fileId) {
                var_dump($fileId);
                //   var_dump($fileIDs);
                //  die();
                $dataFile = [];
                $dataFile["file_id"] = $fileId["file_id"];
                $dataFile["task_id"] = $taskID;
                
                // var_dump($dataFile);
                $fileTable->saveFileToTask($dataFile);
                
            }
        }
        $memberList = explode(",", $memberList);
        $taskMemebrsTable = new \Tasks\Model\TasksMembersTable();
        if (count($memberList)) {
            foreach ($memberList as $member) {
                $taskMemebrsTable->saveMemberToTask([
                    'user_id' => (int) $member,
                    "task_id" => $taskID
                ]);
                $sql = "select project_name from projects where id=" . $project_id;
                $project_name = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE)->toArray()[0]["project_name"];
                /* todo change to transaction methods */
                $notification = new NotificationsTable;
                
                $data = ["text" => "you have new task: " . $task_name . " in project :" . $project_name,
                         "html_id" => "test",
                         'user_id' => $member
                ];
                $notification->createNotification($data);
            }
        }
    }

    public function getTask(int $task_id)
    {
        $task_sql = "SELECT  * FROM tasks where id=" . $task_id;
        $resultSet = $this->adapter->query($task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $task = $resultSet->toArray()[0];
        $sub_task_sql = "SELECT  * FROM tasks where parent_task = " . $task_id;
        $resultSet = $this->adapter->query($sub_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $task["sub_tasks"] = $resultSet->toArray();
        $sub_task_sql = "SELECT  * FROM tasks_users left join user_settings on tasks_users.user_id = user_settings.user_id where tasks_users.task_id=" . $task_id;
        $resultSet = $this->adapter->query($sub_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $task["users"] = $resultSet->toArray();
        $files_task_sql = "SELECT  * FROM tasks_files left join files on tasks_files.file_id = files.id where task_id=" . $task_id;
        $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $files = $resultSet->toArray();
        foreach ($files as $file) {
            $files_task_sql = "SELECT  * FROM files where id=" . $file["file_id"];
            $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
            $task["files"][] = $resultSet->toArray();
        }
        
//         foreach ($task["sub_tasks"] as $sub_task) {
//             $files_task_sql = "SELECT  * FROM tasks_files where task_id=" . $sub_task['id'];
//             $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
//             $files = $resultSet->toArray();
//             var_dump($files);
//             foreach ($files as $file) {
//                 $files_task_sql = "SELECT  * FROM files  where id=" . $file["file_id"];
//                 $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
//                 $task["files"][] = $resultSet->toArray();
//             }
//         }
        return $task;
    }

    public function getTasksForProject($project_id)
    {
        $project_id = (int) $project_id;
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
//         $sql = "SELECT  tasks.name,tasks.sort_order,tasks.board_id,tasks.id FROM tasks
//                 left join boards on boards.id = tasks.board_id
//                 left join projects on boards.project_id = projects.id
//                 left join projects_members on projects_members.project_id = projects.id
//                 WHERE tasks.is_archive = '0' and projects_members.project_id='" . $project_id . "' and projects_members.user_id = " . $userId;
        $sql = "SELECT  tasks.name,tasks.sort_order,tasks.board_id,tasks.id FROM tasks
                left join boards on boards.id = tasks.board_id
                left join projects on boards.project_id = projects.id
                WHERE tasks.is_archive = '0'";
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $tasks = $resultSet->toArray();
        $columns = [];
        foreach ($tasks as $task) {
            $columns[$task["board_id"]][] = $task;
        }
        foreach ($columns as &$column) {
            usort($column, array(
                $this,
                'taskSort'
            ));
        }
        return $columns;
    }

    public function getArhiveForProject($project_id)
    {
        $project_id = (int) $project_id;
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $sql = "SELECT  tasks.name,tasks.sort_order,tasks.board_id,tasks.id,tasks.description FROM tasks
                left join boards on boards.id = tasks.board_id
                left join projects on boards.project_id = projects.id
                left join projects_members on projects_members.project_id = projects.id
                WHERE tasks.is_archive = '1' and projects_members.project_id='" . $project_id . "' and projects_members.user_id = " . $userId;
        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
        $tasks = $resultSet->toArray();
        $columns = [];
        foreach ($tasks as $task) {
            $columns[$task["board_id"]][] = $task;
        }
        foreach ($columns as &$column) {
            usort($column, array(
                $this,
                'taskSort'
            ));
        }
        return $columns;
    }

    private static function taskSort($a, $b)
    {
        $key = 'sort_order';
        if ($a[$key] < $b[$key]) {
            return - 1;
        } else if ($a[$key] > $b[$key]) {
            return 1;
        }
        return 0;
    }

    public function updateATasksInBoard($request)
    {
        $task_list = $request->getPost()->task_list;
        foreach ($task_list as $task) {
            $this->tableGateway->update($task, [
                'id' => $task["id"]
            ]);
        }
    }

    // TODO if in future it will be required to make some more logic with time , it should be moved to special TaskTimeTable model class
    public function addTimeToTask($data)
    {
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $hours = (int) $data["hours"];
        $task_id = (int) $data["task_id"];
        $date = strtotime($data["date"]);
        $sql = "INSERT into  task_time (hours,task_id,user_id,date) values ($hours,$task_id,$userId,$date)";
        return $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
    }

    public function updateTask($data)
    {
        if (isset($data["data"]))
        $data = $data["data"];
        $fileTable = new \Files\Model\FilesTable();
        
        ////////////////////
        $fileIDs = [];
        if(isset($data['files'])){
        $fileIDs = [];
        $i = 0;
        foreach ($data['files']['name'] as $files_value) {
            $fileId =  $fileTable->saveUserFile([["file" => [
                "name" => $data['files']["name"][$i],
                "tmp_name" => $data['files']["tmp_name"][$i],
                "type" => $data['files']["type"][$i]
            ]]]);
             $fileIDs['file'][] =  [
                 "file_id" => $fileId
             ];
            $i++;
        }
        }
        unset($data['files']);
//         if(!isset($data["id"])) {
//             $this->tableGateway->insert($data);
//             $taskID = $this->tableGateway->lastInsertValue;
            
//         }
           
//         else {
            
            $this->tableGateway->update($data, ["id = " . (int) $data["parent_task"]]);
            $taskID = (int) $data["parent_task"];
   //     }
           
       
    
        if ($fileIDs) {
            $fileTable = new \Tasks\Model\TasksFilesTable();
            foreach ($fileIDs["file"] as $fileId) {
                var_dump($fileId);
             //   var_dump($fileIDs);
              //  die();
                    $dataFile = [];
                    $dataFile["file_id"] = $fileId["file_id"];
                    $dataFile["task_id"] = $taskID;
                    
                    // var_dump($dataFile);
                    $fileTable->saveFileToTask($dataFile);
                
            }
        }
        /*
        if (isset($fileID)) {
            $dataFile["file_id"] = $fileID;
            $dataFile["task_id"] = $data["parent_task"];
            $fileTable = new \Tasks\Model\TasksFilesTable();
            $fileTable->saveFileToTask($dataFile);
        }*/
        return $data;
    }

    public function deleteTask(int $task_id)
    {
        $files_task_sql = "SELECT  * FROM tasks_files where task_id=" . $task_id;
        $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $files = $resultSet->toArray();
        session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        foreach ($files as $file) {
            $files_task_sql = "SELECT  * FROM files where id=" . $file["file_id"];
            $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
            $task["files"][] = $resultSet->toArray()[0];
            $filesTable = new FilesTable();
            $filesTable->deleteFile(false, $file["file_id"], $userId);
        }
        /////////////////////////
        
        $files_subtask_sql = "SELECT  * FROM tasks where parent_task=" . $task_id;
        $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
        $subTasks = $resultSet->toArray();
        foreach ($subTasks as $subTask) {
            $files_task_sql = "SELECT  * FROM tasks_files where task_id=" . $subTask['id'];
            $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
            $files = $resultSet->toArray();
            foreach ($files as $file) {
                $files_task_sql = "SELECT  * FROM files where id=" . $file["file_id"];
                $resultSet = $this->adapter->query($files_task_sql, $this->adapter::QUERY_MODE_EXECUTE);
                $task["files"][] = $resultSet->toArray()[0];
                $filesTable = new FilesTable();
                $filesTable->deleteFile(false, $file["file_id"], $userId);
            }
            $delete_sql = "DELETE FROM tasks_files where task_id=" . $subTask['id'];
            $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        }
        
        
        ///////////////////////
        $delete_sql = "DELETE FROM tasks_files where task_id=" . $task_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        
        $delete_sql = "DELETE FROM tasks where id=" . $task_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        
        $delete_sql = "DELETE FROM tasks where parent_task=" . $task_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
        
        $delete_sql = "DELETE FROM tasks_users where task_id=" . $task_id;
        $this->adapter->query($delete_sql, $this->adapter::QUERY_MODE_EXECUTE);
    }

//    public function isUserHaveAccessToTask($task_id,$user_id){
//
//        $sql = "SELECT  tasks.id FROM tasks
//                left join boards on boards.id = tasks.board_id
//                left join projects on boards.project_id = projects.id
//                left join projects_members on projects_members.project_id = projects.id
//                WHERE projects_members.user_id = " . $user_id . " and tasks.id = ".$task_id;
//        $resultSet = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
//
//    } TODO ADD SECURITY CHECK WITH ACL


}


