<?php
namespace Messages\Controller;
use Messages\Model\Messages;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;




class  messagesController extends Controller\preloaderController {
    protected $friendsTable;
    protected $messagesTable;

    public function addMessageAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $messages = new Messages();
        if ($request->isPost()) {
                $this->getMessagesTable()->addMessage($request,$messages->getAdapter());
        }
        return false;
    }




    public function getListMessagesCountsAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $messages = new Messages();
        $messagesTable = $this->getMessagesTable();
        $messagesCounts = $messagesTable->getMessagesCounts($userId,$messages->getAdapter());
        $friends = new Friends();
        $friendsTable = $this->getFriendsTable();
        $friendsList = @$friendsTable->getFriends($userId,$friends->getAdapter(),$messagesCounts->toArray());
        return array('data' => @$friendsList->toArray());
    }

    public function getMessagesTable()
    {

        if (!$this->messagesTable) {
            $sm = $this->getServiceLocator();
            $this->messagesTable = $sm->get('Messages\Model\MessagesTable');
        }
        return $this->messagesTable;
    }

    public function getFriendsTable()
    {

        if (!$this->friendsTable) {
            $sm = $this->getServiceLocator();
            $this->friendsTable = $sm->get('Friends\Model\FriendsTable');
        }
        return $this->friendsTable;
    }




}