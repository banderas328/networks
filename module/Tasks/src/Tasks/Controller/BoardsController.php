<?php
namespace Tasks\Controller;

use Zend\View\Model\ViewModel;
use Tasks\Model\Boards;
use Tasks\Model\BoardsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;



class BoardsController extends Controller\preloaderController
{
    
    protected $boardsTable;
    
    public function indexAction(){
        $this->layout('layout/only_form');
    }
    
    public function createBoardAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $boards = new  Boards();
        if ($request->isPost()) {
            $this->getBoardsTable()->createBoard($request, $boards->getAdapter());
        }
        return false;
    }
    
    public function getBoardsTable()
    {
        
        if (!$this->getBoardsTable) {
            // $sm = $this->getServiceLocator();
            // $this->friendsTable = $sm->get('Friends\Model\FriendsTable');
            $this->getBoardsTable = new \Tasks\Model\BoardsTable;
        }
        return $this->getBoardsTable;
    }
    
}
