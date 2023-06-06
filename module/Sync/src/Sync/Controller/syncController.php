<?php
namespace Sync\Controller;
//use Preloader\Controller;
use Zend\Http\PhpEnvironment\Response;
use Zend\Session\Container;
use Zend\Mvc\Controller\AbstractActionController;
use Messages\Controller\messagesController;
use Messages\Model\Messages;
use Chanels\Model\ChanelsMessagesTable;
use Chanels\Model\ChanelsMessages;
use Chanels\Model\Chanels;
use Chanels\Model\ChanelsTable;
use User\Model\UserTable;
use User\Model\User;






class  syncController extends AbstractActionController {
    protected $messagesTable;
    protected $chanelsTable;
    protected $chanelsMessagesTable;
    protected $usersTable;
    public function syncAction(){
        $messages['simple_messages'] = $messages = $this->checkNewMessages();
        echo json_encode($messages);
        die();
    }

    public function syncChanelAction(){
        $messages = new Messages();
        $messages = $this->checkNewMessages($messages->getAdapter());
        $messages["simple_messages"] = $messages;
        $messages = $this->checkNewChanelsMessages();
        $messages["chanels_messages"] = $messages;
        echo json_encode($messages);
        die();
    }

    public function syncChanelPrivateAction(){
        if(!$this->isUserCanAccessToChanel()) {
            die("try more :)");
        }
        $messages = $this->checkNewChanelsMessages();
        $messages["chanels_messages_private"] = $messages;
        echo json_encode($messages);
        die();
    }

    public function isUserCanAccessToChanel(){
        $chanels = new Chanels();
        return $this->getChanelsTable()->checkUserHaveAccessToChanel($chanels->getAdapter(),$this->getRequest());
    }

    public function isPrivateChanel(){
        $chanels = new Chanels();
        return $this->getChanelsTable()->checkIsChanelPrivate($chanels->getAdapter(),$this->getRequest());
    }

    public function checkNewMessages(){
        $this->layout('layout/only_form');
        $messages = new Messages();
        $freshMessages = $this->getMessagesTable()->checkNewMessages($messages->getAdapter());
        $this->getMessagesTable()->markMessagesAsDileverd($freshMessages,$messages->getAdapter());
        return $freshMessages->buffer()->toArray();
    }

    public function checkNewChanelsMessages(){
        $this->layout('layout/only_form');
        $messages = new ChanelsMessages();
        $request = $this->getRequest();
        $freshMessages =  $this->getChanelsMessagesTable()->checkNewMessages($messages->getAdapter(),$request);
        return $freshMessages->buffer()->toArray();
    }
    public function checkNewPrivateChanelsMessages(){
        $this->layout('layout/only_form');
        $messages = new ChanelsMessages();
        $request = $this->getRequest();
        $freshMessages =  $this->getChanelsMessagesTable()->checkNewMessages($messages->getAdapter(),$request);
        return $freshMessages->toArray();
    }
    public function getOldMessagesAction(){
        $this->layout('layout/only_form');
        $messages = new Messages();
        $request = $this->getRequest();
        $oldMessages = $this->getMessagesTable()->checkOldMessages($messages->getAdapter(),$request);
        echo json_encode(@$oldMessages->toArray());
        die();

    }

    public function changeLangAction(){
        $request = $this->getRequest();
        $users = new User();
        $this->getUsersTable()->changeUserLang($users->getAdapter(),$request);
        $user_session = new Container('user');
        $user_session->user->lang = $request->getPost()->lang;
        die(json_encode("language_changed"));

    }

    public function getChanelsTable()
    {
        if (!$this->chanelsTable) {
            $this->chanelsTable = new \Chanels\Model\ChanelsTable;
        }
        return $this->chanelsTable;
    }

    public function getMessagesTable()
    {
        if (!$this->messagesTable) {
            $this->messagesTable = new \Messages\Model\MessagesTable;
        }
        return $this->messagesTable;
    }
    public function getChanelsMessagesTable()
    {
        if (!$this->chanelsMessagesTable) {
            $this->chanelsMessagesTable = new \Chanels\Model\ChanelsMessagesTable;
        }
        return $this->chanelsMessagesTable;
    }
    public function getUsersTable()
    {
        if (!$this->usersTable) {
            $this->usersTable = new \User\Model\UserTable;
        }
        return $this->usersTable;
    }


}