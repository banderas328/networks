<?php
namespace Tasks\Controller;

use Zend\View\Model\ViewModel;
use Tasks\Model\Tasks;
use Tasks\Model\TasksTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;
use Preloader\Model;



class TasksApiController extends Controller\preloaderController
{

    protected $tasksTable;

    public function indexAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $project_id = $this->getRequest()->getPost()->project_id;
        $this->layout('layout/only_form');
        echo json_encode($this->getTasksTable()->getTasksForProject($project_id,$userId));
        return false;
        //return @array('tasks' => $tasks);

    }

    public function createTaskAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $this->layout('layout/only_form');
        $request = $this->getRequest();

        $request = array_merge_recursive(
            $request->getPost()->toArray(),
            $_FILES
        );
        $this->getTasksTable()->createTask($request,$userId);
        return false;
    }

    public function updateTasksInBoardAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        $request = $this->getRequest();
        $this->getTasksTable()->updateATasksInBoard($request);
        die("ok");
    }

    public function getTaskAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        $request = $this->getRequest();
        $this->layout('layout/only_form');
        $task_id = (int) $this->getRequest()->getPost()->task_id;
        $task = $this->getTasksTable()->getTask($task_id);
        echo json_encode(['task' => $task]);
        die();
    }

    public function addTimeToTaskAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        $request = $this->getRequest();
        if ($this->getTasksTable()->addTimeToTask($request->getPost()->toArray()["data"],$userId)) die("time added");
        die("something wrong");

    }

    public function updateTaskAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        $request = $this->getRequest();
        $request = array_merge_recursive(
            $request->getPost()->toArray(),
            $_FILES
        );
        unset($request['token']);
        echo json_encode($this->getTasksTable()->updateTask($request,$userId));
        die();
    }
    

    public function loadProjectArchiveAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        echo json_encode(@array('tasks' => $this->getTasksTable()->getArhiveForProject($this->getRequest()->getPost()->project_id)));
        die();
    }

    public function deleteTaskAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for api check
        $request = $this->getRequest();
        $this->getTasksTable()->deleteTask($request->getPost()->data["task_id"],$userId);
        die('ok');
    }


    public function getTasksTable()
    {
        if (!$this->tasksTable) {
            $this->tasksTable = new \Tasks\Model\TasksTable;
        }
        return $this->tasksTable;
    }

}

