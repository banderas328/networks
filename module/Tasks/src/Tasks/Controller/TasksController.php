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
        $this->layout('layout/only_form');
        $boards = $this->getTasksTable()->getTasks();
        return @array('tasks' => tasks);
        
    }
    
    public function createTaskAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $boards = new  Tasks();
        if ($request->isPost()) {
            $this->getTasksTable()->createTask($request, $boards->getAdapter());
        }
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

