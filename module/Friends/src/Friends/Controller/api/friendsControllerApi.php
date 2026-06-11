<?php
namespace Friends\Controller\Api;

//use Friends\Form\FriendsForm;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;


class  friendsControllerApi extends Controller\preloaderController
{
    protected $friendsTable;


    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
            $this->friendsTable = new \Friends\Model\FriendsTable;
        }
        return $this->friendsTable;
    }

    public function addFriendRequestAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $this->getFriendsTable()->addFriendRequest($userId, $friendId, $friends->getAdapter());
        echo "have";
        die();
    }

    public function requestsAction()
    {
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $requests = $this->getFriendsTable()->getRequests($userId, $friends->getAdapter());
        if($requests) $requests = $requests->toArray();
        else $requests = false;
        echo json_encode  (@array('friends' => $requests));
        return false;
    }


    public function addFriendAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $this->getFriendsTable()->addFriend($userId, $friendId, $friends->getAdapter());
        echo "ok";
        return false;
    }

    public function cancelFriendAction()
    {
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $this->getFriendsTable()->cancelFriend($userId, $friendId, $friends->getAdapter());
        echo "ok"
        return false;
    }

    public function getFriendListAction(){
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode(@array('friends' => $friends));
        return false;
    }
    public function getfriendForMemberlistAction(){
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
    }

    public function addfriendForMemberlistAction(){
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
        return false;
    }

    public function getfriendForProjectMemberlistAction(){

        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
        return false;
    }
}
