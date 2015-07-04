<?php
namespace User\Controller;

use User\Form\UserRegisterForm;
use User\Form\UserAuthForm;
use User\Form\UserSearchForm;
//use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use User\Model\User;
use User\Form\UserForm;
use Zend\Mail;
use Zend\Mail\Message;
use Zend\Mime\Message as MimeMessage;
use Zend\Mime\Part as MimePart;
//use Zend\Crypt\Password\Bcrypt;
use Zend\Session\Container;
use Preloader;
use Preloader\Controller;
use Settings\Model\Settings;
use Zend\Stdlib\RequestInterface as Request;


class UserController extends Controller\preloaderController
{
    protected $userTable;
	protected $settingsTable;
//method for register user
    public function registerAction()
    {
        $this->layout('layout/only_form');
        $form = new UserRegisterForm();
        $form->get('submit')->setValue('Register');
        $request = $this->getRequest();
        if ($request->isPost()) {
            $user = new User();
            $form->setInputFilter($user->getInputFilter());
            $form->setData($request->getPost());
            $valid = true;
            if ($request->getPost('password') !== $request->getPost('confirm_password')) {
                $valid = false;
                $form->get('password')->setMessages(array('passwords must be equal'));
            }
            if ($form->isValid() && $valid) {
                $data = $form->getData();
                $password = $data['password'];
                $securePass = md5("octopus".$password);
                $data['password'] = $securePass;
                $data['activated'] = 0;
                $key = $this->randKey(40);
                $data["email_key"] = $key;
                $user->exchangeArray($data);
                $this->getUserTable()->registerUser($user);
                $this->sendRegistrationMail($request->getPost("email"), $key);
                $view = new ViewModel();
                $view->setTemplate('user/user/registred.phtml');
                return $view;
            }

        }
        return array('form' => $form);
    }
//method for generate random string to email activation of user accout
    public function randKey($length, $charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
    {
        $str = '';
        $count = strlen($charset);
        while ($length--) {
            $str .= $charset[mt_rand(0, $count - 1)];
        }
        return $str;
    }
//method for sending email to activate user accout after registation
    public function sendRegistrationMail($email, $key)
    {
        $uri = $this->getRequest()->getUri();
        $base = sprintf('%s://%s', $uri->getScheme(), $uri->getHost());
        $url = $base . "/user/confirm/email/" . $email . "/key/" . $key;
        $message = new Message();
        $message->addTo($email)
            ->addFrom('banderas328@gmail.com')
            ->setSubject('Networks Activation');
        $html = new MimePart("This is the message to activate user account on networks service please follow this link <a href='" . $url . "'>activate</a>");
        $html->type = "text/html";
        $body = new MimeMessage();
        $body->addPart($html);
        $message->setBody($body);
        $transport = new Mail\Transport\Sendmail();
        $transport->send($message);
    }
//method for confirm activation user account from email
    public function confirmAction()
    {
        $email = $this->params('value1');
        $key = $this->params('value2');
        if (!$email || !$key) {
            die("not so easy ;)");
        }
        $result = $this->getUserTable()->activateUser($email, $key);
        $view = new ViewModel();
        if ($result) {
            $view->setTemplate('user/user/activated.phtml');
        } else {
            $view->setTemplate('user/user/dont_activated.phtml');
        }
        return $view;
    }
//method for login action
    public function loginAction(){
        $this->layout('layout/only_form');
        $form = new UserAuthForm();
        $form->get('submit')->setValue('Login');
        $request = $this->getRequest();
        if ($request->isPost()) {
            $data = $request->getPost();
            $password = $data['password'];
            $securePass = md5("octopus".$password);
            $user = new User();
            $dbAdapter  = $user->getAdapter();
            $authResult  =  $this->getUserTable()->authUser($data['email'],$securePass,$dbAdapter);
            $user_session = new Container('user');
            if($authResult) {
                $user_session->user = $authResult;
                return $this->redirect()->toRoute('main',
                    array('controller'=>"main",
                        'action' => 'index'
                    ));
            }
        }
        return array('form' => $form);
    }
//user search action
    public function userSearchAction(){
        $this->layout('layout/only_form');
        $limitForPage = 1;
        $form = new UserSearchForm();
        $request = $this->getRequest();
        $paginator = false;
        $user_session = new Container('user_search');
        $dataSearch = $user_session->user_search;
        if ($request->isPost() || $dataSearch) {
            $data = $request->getPost();
            $data = get_object_vars($data);
            unset($data['submit']);
            $newData = false;
            foreach($data as $key => $value) {
                if($value) {
                    $newData = true;
                }
            }
            if(!$newData) {
                $user_session = new Container('user_search');
                $data = $user_session->user_search;
            }
            $user = new User();
            $dbAdapter  = $user->getAdapter();
            $user_session = new Container('user_search');
            $user_session->user_search = $data;
            $page = (int)$this->params()->fromQuery('page', 1);
            $paginator = $this->getUserTable()->searchUser($data,$dbAdapter,$limitForPage,$page,true);
            $paginator->setCurrentPageNumber((int)$this->params()->fromQuery('page', 1));
            $paginator->setItemCountPerPage($limitForPage);
        }
        return array('form' => $form , 'paginator' => $paginator , 'div' => "usersearchdiv");
    }
	public function userPageAction(){
		$settings = new Settings();
		$settings->getAdapter();
		$userSettings = $this->getSettingsTable()->getCurrentUserSettings($settings->getAdapter());
		return array('settings' => $userSettings->toArray() );
	}

    public function getUserTable()
    {
        if (!$this->userTable) {
            $sm = $this->getServiceLocator();
            $this->userTable = $sm->get('User\Model\UserTable');
        }
        return $this->userTable;
    }
	public function getSettingsTable()
	{
		if (!$this->settingsTable) {
			$sm = $this->getServiceLocator();
			$this->settingsTable = $sm->get('Settings\Model\SettingsTable');
		}
		return $this->settingsTable;
	}




}