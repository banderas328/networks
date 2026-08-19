<?php
namespace Friends\Controller;

//use Friends\Form\FriendsForm;
use Preloader;
use Preloader\Controller;
use Zend\Session\Container;
use Friends\Model\Friends;
use Preloader\Model;


class  friendsApiController extends Controller\preloaderController
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
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friendId = $this->getRequest()->getPost('friend_user_id');
        $friends = new Friends();
        $this->getFriendsTable()->addFriendRequest($userId, $friendId, $friends->getAdapter());
        echo "ok";
        die();
    }

    public function requestsAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friends = new Friends();
        $requests = $this->getFriendsTable()->getRequests($userId, $friends->getAdapter());
        if($requests) $requests = $requests->toArray();
        else $requests = false;
        echo json_encode  (@array('friends' => $requests));
        die();
    }


    public function addFriendAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friendId = $this->getRequest()->getPost('friend_id');
        $friends = new Friends();
        $this->getFriendsTable()->addFriend($userId, $friendId, $friends->getAdapter());
        echo "ok";
        die();
    }

    public function cancelFriendAction()
    {
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friendId = $this->getEvent()->getRouteMatch()->getParam('user_id');
        $friends = new Friends();
        $this->getFriendsTable()->cancelFriend($userId, $friendId, $friends->getAdapter());
        echo "ok";
        return false;
    }

    public function getFriendListAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode(@array('friends' => $friends));
        die();
    }
    public function getfriendForMemberlistAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
    }

    public function addfriendForMemberlistAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
        die();
    }

    public function getfriendForProjectMemberlistAction(){
        $userId = \Preloader\Model\preloaderModel::getUserId($this->getApiUser($this->getRequest()));
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId, $friends->getAdapter());
        if($friends) $friends = $friends->toArray();
        else $friends = false;
        echo json_encode (@array('friends' => $friends));
        die();
    }
}
