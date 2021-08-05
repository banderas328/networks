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
        $board_id = 0;//NEED TO BE RECIVED HERE
        $this->layout('layout/only_form');
        $tasks = $this->getTasksTable()->getTasksForBoard($board_id);
        return @array('tasks' => $tasks);
        
    }
    
    public function createTaskAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $boards = new  Tasks();
        $request = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
            );

            $this->getTasksTable()->createTask($request, $boards->getAdapter());
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

