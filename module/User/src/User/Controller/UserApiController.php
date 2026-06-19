<?php

namespace User\Controller;

use Preloader\Controller;
use User\Model\User;
use Settings\Model\Settings;
use Zend\View\Model\JsonModel;
use Zend\Session\Container;

class UserApiController extends Controller\preloaderController
{
    protected $userTable;
    protected $settingsTable;
    protected $memcached;

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

    /* ====================================================
       REGISTER
    ==================================================== */

    public function registerAction()
    {

            if (!$this->getRequest()->isPost()) {
                return $this->jsonResponse(['error' => 'Method not allowed'], 405);
            }

            $data = $this->getRequest()->getPost();

            $email = trim($data['email'] ?? '');
            $password = $data['password'] ?? '';
            $confirm = $data['confirm_password'] ?? '';

            if (!$email || !$password) {
                return $this->jsonResponse(['error' => 'Email and password required'], 400);
            }

            if ($password !== $confirm) {
                return $this->jsonResponse(['error' => 'Passwords do not match'], 400);
            }

            if ($this->getUserTable()->searchSystemUser(['email' => $email])) {
                return $this->jsonResponse(['error' => 'User already exists'], 409);
            }

            $user = new User();
            $password = md5("octopus" . $password );
            $key = $this->randKey(40);
            $user->exchangeArray([
                'email' => $email,
                'login' => $email,
                'password' => $password,
                'activated' => 0,
                'email_key' => $key

            ]);

            $this->getUserTable()->registerUser($user);

            return $this->jsonResponse(['message' => 'User registered']);
    }


    /* ====================================================
       LOGIN (ACCESS + REFRESH)
    ==================================================== */

    public function loginAction()
    {

        $request = $this->getRequest();
        $message = false;
        if ($request->isPost()) {
            $data = $request->getPost()->toArray();
            $password = $data['password'];
            $securePass = md5("octopus" . $password );
            $user = new User();
            $dbAdapter = $user->getAdapter();
            $user = $this->getUserTable()->searchSystemUser(['email' => $data["email"]]);
            if (!$user) {
                $message = "Can't find activated user with such email";
                echo json_encode("Can't find activated user with such email");
                die();
            }
            $authResult = $this->getUserTable()->authUser($data['email'], $securePass, $dbAdapter);
            $user_session = new Container('user');
            if ($authResult) {
                $data['user_id'] = (array)$authResult->id;
                $data['token'] = $this->randKey(20);
                $data  = $this->getUserTable()->apiUserAuth($data);
                if(!isset( $_SESSION['user'])) {
                  session_start();
                  $_SESSION['user'] = (array)$authResult;
                }                
                $dataReturn['token'] = $data['access_token_sha'];
                $dataReturn['email'] = (array)$authResult->email;
                echo json_encode($dataReturn);
                die();
            }
        }
        echo json_encode($message);
        die();
    }


    /* ====================================================
       AUTH BY ACCESS TOKEN
    ==================================================== */

    public static function authByTokenAction()
    {
        $token  = $this->getRequest()->getPost('token');

        $userId = $this->getUserTable()->findByAccessToken($token);
        if (!$userId) {
            return $this->jsonResponse(['error' => 'Invalid or expired token'], 401);
        }

        return $this->jsonResponse(['user_id' => $userId]);
    }

    /* ====================================================
       LOGOUT
    ==================================================== */

    public function logoutAction()
    {


     $token  = $this->getRequest()->getPost('token');  
     $userId = $this->getUserTable()->findByAccessToken($token);
     $this->getUserTable()->apiTableGateway->delete(["user_id" => $userId]);
     return $this->jsonResponse(['message' => 'Logged out']);
    }


    private function jsonResponse($data, $status = 200)
    {
        http_response_code($status);
        echo json_encode(["data" => $data , "status" => $status]);
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