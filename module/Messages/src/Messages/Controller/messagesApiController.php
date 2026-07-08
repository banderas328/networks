<?php
namespace Messages\Controller;
use Messages\Model\Messages;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;
use Preloader\Model;




class  messagesApiController extends Controller\preloaderController {
    protected $friendsTable;
    protected $messagesTable;

    public function addMessageAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $request = $this->getRequest();
        $messages = new Messages();
        if ($request->isPost()) {
                $this->getMessagesTable()->addMessage($request,$messages->getAdapter(),$userId);
        }
       die();
    }




    public function getMessagesTable()
    {
        if (!$this->messagesTable) {
            $this->messagesTable = new \Messages\Model\MessagesTable;
        }
        return $this->messagesTable;
    }

    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
            $this->friendsTable = new \Friends\Model\FriendsTable;
        }
        return $this->friendsTable;
    }




}
