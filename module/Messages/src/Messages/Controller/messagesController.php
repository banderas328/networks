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
        if($friendsList) {
        $data = $friendsList->buffer();
        return array('data' => $data );
        }
        else {
            return array('data' => [] );
        }
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