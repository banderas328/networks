<?php
namespace User\Controller;

require_once $_SERVER["DOCUMENT_ROOT"].'/../vendor/phpmailer/phpmailer/src/Exception.php';
require_once $_SERVER["DOCUMENT_ROOT"].'/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once $_SERVER["DOCUMENT_ROOT"].'/../vendor/phpmailer/phpmailer/src/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


use User\Form\UserRegisterForm;
use User\Form\UserAuthForm;
use User\Form\UserResetForm;
use User\Form\UserRestoreForm;
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
        $this->layout('layout/layout');
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
    public function restoreAction(){
        $this->layout('layout/layout');
        $form = new UserRestoreForm();
        $form->get('submit')->setValue('Restore');
        $request = $this->getRequest();
        $message = false;
        if ($request->isPost()) {
                $data["email"] = $request->getPost('email');
                $data['activated'] = 0;
                $key = $this->randKey(40);
                $data["email_key"] = $key;
                if($this->getUserTable()->restoreUser($data)) {
                    $message = "Please check email";
                }
        }
        return array('form' => $form,'message' => $message);
     }

     public function resetAction(){
         $this->layout('layout/layout');
         $form = new UserResetForm();
         $form->get('submit')->setValue('Reset');
         $request = $this->getRequest();
         $message = false;
         $data = [];
         if ($request->isPost()) {
             if ($request->getPost('password') !== $request->getPost('confirm_password')) {
                 return array('form' => $form, 'message' => 'passwords must be equal');
             }
             $data["password"] = $request->getPost('password');
             $data["password"] = md5("octopus" . $data["password"]);
             $email_key = $this->params('value2');

             if ($this->getUserTable()->resetUser($data)) {
                 $message = "Please check email";
                 //   sendRestoreMail
//                         $email = $this->params('value1');


//        $view = new ViewModel();
//        if ($result) {
//            $view->setTemplate('user/user/activated.phtml');
//        } else {
//            $view->setTemplate('user/user/dont_activated.phtml');
//        }

             }
         }
         return array('form' => $form,'message' => $message);

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
        try {
            $mail = new PHPMailer(true);
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'anton.zhavrid.minsk@gmail.com';
            $mail->Password   = '5lxdiOlVcLBf';
            $mail->Port = 587;
            $mail->setFrom("anton.zhavrid.minsk@gmail.com","Anton Zhavrid");
            $mail->addAddress($email,"");//���� ����������
            //$mail->addReplyTo("kudaotvetit@yandex.ru","��� ���� ������ ��� ������");
            $mail->SMTPSecure = 'tls';
            $mail->isHTML(true);//HTML ������
            $mail->Subject = "Octopus activation";
            $mail->Body    = "This is the message to activate user account on networks service please follow this link <a href='" . $url . "'>activate</a>";
            $mail->AltBody = "welcome";

            $mail->send();
            return true;
        } catch (Exception $e) {
            echo "send error: {$mail->ErrorInfo}";
        }
    }
    public function sendRestoreMail($email, $key)
    {

        $uri = $this->getRequest()->getUri();
        $base = sprintf('%s://%s', $uri->getScheme(), $uri->getHost());
        $url = $base . "/user/restore/email/" . $email . "/key/" . $key;
        try {
            $mail = new PHPMailer(true);
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'anton.zhavrid.minsk@gmail.com';
            $mail->Password   = '5lxdiOlVcLBf';
            $mail->Port = 587;
            $mail->setFrom("anton.zhavrid.minsk@gmail.com","Anton Zhavrid");
            $mail->addAddress($email,"");//���� ����������
            //$mail->addReplyTo("kudaotvetit@yandex.ru","��� ���� ������ ��� ������");
            $mail->SMTPSecure = 'tls';
            $mail->isHTML(true);//HTML ������
            $mail->Subject = "Octopus activation";
            $mail->Body    = "This is the message to restore user account in octopus project <a href='" . $url . "'>restore</a>";
            $mail->AltBody = "welcome";

            $mail->send();
            return true;
        } catch (Exception $e) {
            echo "send error: {$mail->ErrorInfo}";
        }
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
        $this->layout('layout/layout');
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
               // $user_session->user = $authResult;
                session_start();
                $_SESSION['user'] = (array)$authResult;
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
        $form = new UserSearchForm();
        $request = $this->getRequest();
        if ($request->isPost()) {
            $data = $request->getPost();
            unset($data['submit']);
            $user = new User();
            $dbAdapter  = $user->getAdapter();
            $users = $this->getUserTable()->searchUser($data,$dbAdapter);
        }
        return array('form' => $form , 'users' => $users , 'div' => "usersearchdiv");
    }
	public function userPageAction(){
		$settings = new Settings();
		$settings->getAdapter();
		$userSettings = $this->getSettingsTable()->getCurrentUserSettings($settings->getAdapter());
		return array('settings' => $userSettings->toArray() );
	}

	public function logoutAction(){
	    unset($_SESSION['user']);
        if (isset($_SERVER['HTTPS']) &&
            ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
            isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
            $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
            $protocol = 'https://';
        }
        else {
            $protocol = 'http://';
        }
        header("Location: ".$protocol.$_SERVER["HTTP_HOST"].'/user/logout');
        die();
	}

    public function getUserTable()
    {
        if (!$this->userTable) {
            $this->userTable = new \User\Model\UserTable;
        }
        return $this->userTable;
    }
	public function getSettingsTable()
	{
		if (!$this->settingsTable) {
			$this->settingsTable = new \Settings\Model\SettingsTable;
		}
		return $this->settingsTable;
	}




}
