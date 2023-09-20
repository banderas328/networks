<?php

namespace User\Controller;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';

use User\Controller\PHPMailer\PHPMailer;
use User\Controller\PHPMailer\Exception;
use User\Controller\PHPMailer\SMTP;


use User\Form\UserRegisterForm;
use User\Form\UserAuthForm;
use User\Form\UserResetForm;
use User\Form\UserRestoreForm;
use User\Form\UserSearchForm;

//use Zend\Mvc\Controller\AbstractActionController;
use Zend\Config\Config;
use Zend\Config\Factory;
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
        $message = false;
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
                $securePass = md5("octopus" . $password);
                $data['password'] = $securePass;
                $data['activated'] = 0;
                $key = $this->randKey(40);
                $data["email_key"] = $key;
                $user->exchangeArray($data);
                $this->getUserTable()->registerUser($user);
                if ($this->sendRegistrationMail($request->getPost("email"), $key)) {
                    $message = "Please Check Email";
                }
            }

        }
        return array('form' => $form, 'message' => $message);
    }

    public function restoreAction()
    {
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
            $this->getUserTable()->restoreUser($data);
            $message = "Please check email";
            $this->sendRestoreMail($data["email"], $key);
        }
        return array('form' => $form, 'message' => $message);
    }

    public function resetAction()
    {
        session_start();
        $this->layout('layout/layout');
        $form = new UserResetForm();
        $form->get('submit')->setValue('Reset');
        $request = $this->getRequest();
        if(!$_SESSION['email_key'] or !$_SESSION['email_key']) {
            $email = $this->params('value1');
            $key = $this->params('value2');
            $_SESSION['email_key'] = $key;
            $_SESSION['email'] = $email;
        }
        else {
            $email = $_SESSION['email'];
            $key = $_SESSION['email_key'];

        }
        if (!$email || !$key) {
            die("whoops");
        }
        $user = $this->getUserTable()->searchSystemUser(['email' => $email, 'email_key' => $key, 'activated' => 0]);
        if (!$user) die("error");

        $message = false;
        $data = [];
        if ($request->isPost()) {
            if ($request->getPost('password') !== $request->getPost('confirm_password')) {
                return array('form' => $form, 'message' => 'passwords must be equal');
            }
            $data["password"] = $request->getPost('password');
            $data["password"] = md5("octopus" . $data["password"]);
            $data["activated"] = 1;
            $data["email"] = $email;
            $data["email_key"] = $key;
            if ($this->getUserTable()->resetUser($data)) {
                $message = "Please Login with new password";
                unset($_SESSION['email']);
                unset($_SESSION['email_key']);
            }
        }
        return array('form' => $form, 'message' => $message);

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
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->Host = $config->smtp["yandex"]->address;
        $mail->SMTPAuth = true;
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->Username = $config->smtp["yandex"]->username; // Если почта для домена, то логин это полный адрес почты
        $mail->Password = $config->smtp["yandex"]->password;
        $mail->SMTPSecure = $config->smtp["yandex"]->secure;
        $mail->Port = $config->smtp["yandex"]->port;
        $mail->CharSet = 'UTF-8';
        $mail->From = $config->smtp["yandex"]->from_mail;
        $mail->FromName = $config->smtp["yandex"]->from_name;
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = 'Octopus Registration';
        $mail->Body = "This is the message to activate user account on Octopus service, please follow this link <a href='" . $url . "'>activate</a>";
        if (!$mail->send()) {
            return false;
        } else {
            return true;
        }
    }

    public function sendRestoreMail($email, $key)
    {

        $uri = $this->getRequest()->getUri();
        $base = sprintf('%s://%s', $uri->getScheme(), $uri->getHost());
        $url = $base . "/user/reset/email/" . $email . "/key/" . $key;
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->Host = $config->smtp["yandex"]->address;
        $mail->SMTPAuth = true;
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->Username = $config->smtp["yandex"]->username; // Если почта для домена, то логин это полный адрес почты
        $mail->Password = $config->smtp["yandex"]->password;
        $mail->SMTPSecure = $config->smtp["yandex"]->secure;
        $mail->Port = $config->smtp["yandex"]->port;
        $mail->CharSet = 'UTF-8';
        $mail->From = $config->smtp["yandex"]->from_mail;
        $mail->FromName = $config->smtp["yandex"]->from_name;
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = 'Octopus Restore';
        $mail->Body = "This is the message to restore user account on Octopus service, please follow this link <a href='" . $url . "'>Restore</a>";
        if (!$mail->send()) {
            return false;
        } else {
            return true;
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
    public function loginAction()
    {
        $this->layout('layout/layout');
        $form = new UserAuthForm();
        $form->get('submit')->setValue('Login');
        $request = $this->getRequest();
        $message = false;
        if ($request->isPost()) {
            $data = $request->getPost();
            $password = $data['password'];
            $securePass = md5("octopus" . $password);
            $user = new User();
            $dbAdapter = $user->getAdapter();
            $user = $this->getUserTable()->searchSystemUser(['activated' => '1', 'email' => $data["email"]]);
            if (!$user) {
                $message = "Can't find activated user with such email";
                return array('form' => $form, "message" => $message);
            }
            $authResult = $this->getUserTable()->authUser($data['email'], $securePass, $dbAdapter);
            $user_session = new Container('user');

            if ($authResult) {
                // $user_session->user = $authResult;
                session_start();
                $_SESSION['user'] = (array)$authResult;
                return $this->redirect()->toRoute('main',
                    array('controller' => "main",
                        'action' => 'index'
                    ));
            }
        }
        return array('form' => $form, "message" => $message);
    }

//user search action
    public function userSearchAction()
    {
        $this->layout('layout/only_form');
      //  $form = new UserSearchForm();
        $request = $this->getRequest();
        if ($request->isPost()) {
            $data = $request->getPost();
            if(isset($data['submit'])) unset($data['submit']);
            $user = new User();
            $dbAdapter = $user->getAdapter();
            $users = $this->getSettingsTable()->searchUsersOnSettings($data);
        }
        if(isset($users)) {
            
            $response["users"] = $users;
        }
        $response["div"] = "usersearchdiv";
        return $response;
    }

    public function userPageAction()
    {
        $settings = new Settings();
        $settings->getAdapter();
        $userSettings = $this->getSettingsTable()->getCurrentUserSettings($settings->getAdapter());
        return array('settings' => $userSettings->toArray());
    }

    public function logoutAction()
    {
        unset($_SESSION['user']);
        if (isset($_SERVER['HTTPS']) &&
            ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
            isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
            $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
            $protocol = 'https://';
        } else {
            $protocol = 'http://';
        }
        header("Location: " . $protocol . $_SERVER["HTTP_HOST"] . '/user/logout');
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
