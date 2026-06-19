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


class ChanelsApiController extends Controller\preloaderController
{
    protected $chanelsTable;
    protected $chanelsMessagesTable;


    public function createChanelAction(){
        $userId = $this->getApiUser($this->getRequest());
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if ($request->isPost()) {
            $this->getChanelsTable()->createChanel($request, $chanels->getAdapter(),$userId);
        }
        echo "ok";
        return false;
    }

    public function indexPublicAction()
    {
        $userId = $this->getApiUser($this->getRequest());
        $chanels =  $this->getChanelsTable()->fetchAllPublic()->toArray();
        echo json_encode ([
            'chanels' => $chanels
        ]);
        die();
    }

    public function indexPrivateAction()
    {
        $userId = $this->getApiUser($this->getRequest());
        $chanels = new  Chanels();
        $chanelsArray = $this->getChanelsTable()->fetchAllPrivate($chanels->getAdapter(),$userId)->toArray();
        echo json_encode([
            'chanels' => $chanelsArray]);
        die();
       
    }

    public function chanelRequestAction()
    {
        $userId = $this->getApiUser($this->getRequest());
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if ($request->isPost()) {
           echo  json_encode($this->getChanelsTable()->addRequestToChanel($request, $chanels->getAdapter(), $userId));
        }
        die();
    }

    public function addmessagetochanelAction()
    {

        $userId = $this->getApiUser($this->getRequest());
        $request = $this->getRequest();
        $chanelsMessages = new  ChanelsMessages();
        if ($request->isPost()) {
            $this->getChanelsMessagesTable()->addMessageToChanel($request, $chanelsMessages->getAdapter(),$userId);
        }
        echo "ok";
        die();
    }


    public function getPrivateChanelsRequestsAction()
    {
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        echo json_encode (array(
            'requests' => $this->getChanelsTable()->fetchAllPrivateRequests($chanels->getAdapter()),
        ));
        return false;
    }

    public function denyAccessToChanelAction()
    {
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if(!$this->getChanelsTable()->checkIsUserIsChanelAdmin($chanels->getAdapter(),$request)) die('try more :))');
        $this->getChanelsTable()->denyAccessUserToChanel($chanels->getAdapter(),$request);
        echo "ok";
        die();
    }

    public function allowAccessToChanelAction()
    {
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if(!$this->getChanelsTable()->checkIsUserIsChanelAdmin($chanels->getAdapter(),$request)) die('try more');
        $this->getChanelsTable()->allowAccessUserToChanel($chanels->getAdapter(),$request);
        echo "ok";
        die();
    }
    
    public function indexDeleteAction()
    {
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        echo  json_encode(array(
            'chanels' => $this->getChanelsTable()->fetchAllChanelsInAdminRole(),
        ));
        return false;
    }
    
    public function deleteChanelAction(){
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
