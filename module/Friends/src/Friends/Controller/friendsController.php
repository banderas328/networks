<?php
namespace Friends\Controller;

//use Friends\Form\FriendsForm;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;


class  friendsController extends Controller\preloaderController
{
    protected $friendsTable;


    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
           // $sm = $this->getServiceLocator();
           // $this->friendsTable = $sm->get('Friends\Model\FriendsTable');
            $this->friendsTable = new \Friends\Model\FriendsTable;
        }
        return $this->friendsTable;
    }

    public function addFriendRequestAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $this->getFriendsTable()->addFriendRequest($userId, $friendId, $friends->getAdapter());
        return false;
    }

    public function requestsAction()
    {
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $requests = $this->getFriendsTable()->getRequests($userId, $friends->getAdapter());
        if($requests) $requests = $requests->toArray();
        else $requests = false;
        return @array('friends' => $requests);
    }


    public function addFriendAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $this->getFriendsTable()->addFriend($userId, $friendId, $friends->getAdapter());
        return false;
    }

    public function cancelFriendAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $this->getFriendsTable()->cancelFriend($userId, $friendId, $friends->getAdapter());
        return false;
    }

    public function getFriendListAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        return @array('friends' => $friends);
    }
    public function getfriendForMemberlistAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        return @array('friends' => $friends);
    }

    public function getfriendForProjectMemberlistAction(){

        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        return @array('friends' => $friends);
    }
}