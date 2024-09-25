<?php
namespace Chanels\Controller;


use Zend\Mvc\Controller\AbstractActionController;
use Zend\Session\Container;
use Zend\View\Model\ViewModel;
use Chanels\Model;
use Chanels\Model\ChanelsMessagesTable;
use Chanels\Model\ChanelsMessages;
use Chanels\Model\Chanels;
use Chanels\Model\ChanelsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;


class ChanelsController extends Controller\preloaderController
{
    protected $chanelsTable;
    protected $chanelsMessagesTable;


    public function createChanelAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if ($request->isPost()) {
            $this->getChanelsTable()->createChanel($request, $chanels->getAdapter());
        }
        return false;
    }

    public function indexPublicAction()
    {
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'chanels' => $this->getChanelsTable()->fetchAllPublic(),
        ));
    }

    public function indexPrivateAction()
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $user_id = $user_session["id"];
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'chanels' => $this->getChanelsTable()->fetchAllPrivate($chanels->getAdapter(),$user_id),'user_id' => $user_id
        ));
    }

    public function chanelRequestAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if ($request->isPost()) {
           return  json_encode($this->getChanelsTable()->addRequestToChanel($request, $chanels->getAdapter()));
        }
        return false;


    }

    public function addmessagetochanelAction()
    {

        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $chanelsMessages = new  ChanelsMessages();
        if ($request->isPost()) {
            $this->getChanelsMessagesTable()->addMessageToChanel($request, $chanelsMessages->getAdapter());
        }
        return false;
    }


    public function getPrivateChanelsRequestsAction()
    {
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'requests' => $this->getChanelsTable()->fetchAllPrivateRequests($chanels->getAdapter()),
        ));
    }

    public function denyAccessToChanelAction()
    {
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if(!$this->getChanelsTable()->checkIsUserIsChanelAdmin($chanels->getAdapter(),$request)) die('try more :))');
        $this->getChanelsTable()->denyAccessUserToChanel($chanels->getAdapter(),$request);
        die();
    }

    public function allowAccessToChanelAction()
    {
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if(!$this->getChanelsTable()->checkIsUserIsChanelAdmin($chanels->getAdapter(),$request)) die('try more');
        $this->getChanelsTable()->allowAccessUserToChanel($chanels->getAdapter(),$request);
        die();
    }
    
    public function indexDeleteAction()
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();       
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'chanels' => $this->getChanelsTable()->fetchAllChanelsInAdminRole(),
        ));
    }
    
    public function deleteChanelAction(){
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        if ($this->getChanelsTable()->deleteChanel($this->getRequest(),$userId))
            die("deleted");
        die("error delete chanel");
        
        
        
        
    }

    public function getChanelsTable()
    {
        if (!$this->chanelsTable) {
            $this->chanelsTable = new \Chanels\Model\ChanelsTable;
        }
        return $this->chanelsTable;
    }

    public function getChanelsMessagesTable()
    {
        if (!$this->chanelsMessagesTable) {
            $this->chanelsMessagesTable = new \Chanels\Model\ChanelsMessagesTable;
        }
        return $this->chanelsMessagesTable;
    }


}
