<?php
namespace Tasks\Controller;

use Zend\View\Model\ViewModel;
use Tasks\Model\Boards;
use Tasks\Model\BoardsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;
use Preloader\Model;




class BoardsApiController extends Controller\preloaderController
{
    
    protected $boardsTable;
    
    public function indexAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        if ($request->isPost()) {
            $boards =  $this->getBoardsTable()->getProjectBoards($request);
            echo json_encode(array('boards' => $boards,'project_id' => (int)$request->getPost()->project_id));
        }
        die();
    }

    public function createBoardAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));//just for test
        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->getBoardsTable()->createBoard($request);
            $project_id =  $request->getPost()->project_id;
            $boards =  $this->getBoardsTable()->getProjectBoards($request,$userId);
            echo json_encode(array(
                'boards' => $boards,
                "project_id" => $request->getPost()->project_id
            ));
            die();
        }
    }

    public function deleteBoardAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->getBoardsTable()->deleteBoard($request,$userId);
        }
        return false;
    }

    public function updateBoardAction(){
//TODO ?

    }
    
    public function getBoardsTable()
    {
        
        if (!$this->boardsTable) {
            $this->boardsTable = new \Tasks\Model\BoardsTable;
        }
        return $this->boardsTable;
    }
    
}

