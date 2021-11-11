<?php
namespace Tasks\Controller;

use Zend\View\Model\ViewModel;
use Tasks\Model\Boards;
use Tasks\Model\BoardsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;



class NotificationsController extends Controller\preloaderController
{
    
    protected $notificationsTable;
    
    public function indexAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        if ($request->isPost()) {
            $boards =  $this->getBoardsTable()->getProjectBoards($request);
            return @array('boards' => $boards);
        }
        return false;
    }






    

    
}

