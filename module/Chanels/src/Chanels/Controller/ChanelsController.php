<?php
namespace Chanels\Controller;


use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Chanels\Model;
use Chanels\Model\ChanelsMessagesTable;
use Chanels\Model\ChanelsMessages;
use Chanels\Model\Chanels;
use Chanels\Model\ChanelsTable;
use Preloader\Controller;


class ChanelsController extends Controller\preloaderController
{
    protected $chanelsTable;
    protected $chanelsMessagesTable;

    public function indexPublicAction()
    {
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'chanels' => $this->getChanelsTable()->fetchAllPublic(),
        ));
    }

    public function indexPrivateAction()
    {
        $chanels = new  Chanels();
        $this->layout('layout/only_form');
        return new ViewModel(array(
            'chanels' => $this->getChanelsTable()->fetchAllPrivate($chanels->getAdapter()),
        ));
    }

    public function chanelRequestAction()
    {
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $chanels = new  Chanels();
        if ($request->isPost()) {
            $this->getChanelsTable()->addRequestToChanel($request, $chanels->getAdapter());
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
        if(!$this->getChanelsTable()->checkIsUserIsChanelAdmin($chanels->getAdapter(),$request)) die('try more');
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

    public function getChanelsTable()
    {
        if (!$this->chanelsTable) {
            $sm = $this->getServiceLocator();
            $this->chanelsTable = $sm->get('Chanels\Model\ChanelsTable');
        }
        return $this->chanelsTable;
    }

    public function getChanelsMessagesTable()
    {
        if (!$this->chanelsMessagesTable) {
            $sm = $this->getServiceLocator();
            $this->chanelsMessagesTable = $sm->get('Chanels\Model\ChanelsMessagesTable');
        }
        return $this->chanelsMessagesTable;
    }


}