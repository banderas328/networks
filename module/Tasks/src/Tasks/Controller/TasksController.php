<?php
namespace Tasks\Controller;

use Zend\View\Model\ViewModel;
use Tasks\Model\Tasks;
use Tasks\Model\TasksTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;



class TasksController extends Controller\preloaderController
{
    
    protected $tasksTable;
    
    public function indexAction(){
        $project_id = $this->getRequest()->getPost()->project_id;
        $this->layout('layout/only_form');
        echo json_encode($this->getTasksTable()->getTasksForProject($project_id));
        return false;
        //return @array('tasks' => $tasks);

    }
    
    public function createTaskAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $request = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        $this->getTasksTable()->createTask($request);
        return false;
    }

    public function updateTasksInBoardAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $this->getTasksTable()->updateATasksInBoard($request);
        return false;
    }

    public function getTaskAction(){
        $request = $this->getRequest();
        $this->layout('layout/only_form');
        $task_id = (int) $this->getRequest()->getPost()->task_id;
        $task = $this->getTasksTable()->getTask($task_id);
        return @array('task' => $task);
    }

    public function updateTaskAction(){
        $request = $this->getRequest();
        $request = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        $this->getTasksTable()->updateTask($request);
        return false;
    }
    
    public function getTasksTable()
    {
        
        if (!$this->getTasksTable) {
            $this->getTasksTable = new \Tasks\Model\TasksTable;
        }
        return $this->getTasksTable;
    }
    
}

