<?php

namespace User\Controller\Api;

use Preloader\Controller;
use User\Model\User;
use Settings\Model\Settings;
use Zend\View\Model\JsonModel;

class UserControllerApi extends Controller\preloaderController
{
    protected $userTable;
    protected $settingsTable;
    protected $memcached;

    /* ====================================================
       RATE LIMIT
    ==================================================== */

        private function rateLimit($key, $limit, $seconds)
        {
            $mc = $this->getMemcached();

            $current = $mc->get($key);

            if ($current === false) {
                $mc->set($key, 1, $seconds);
                return true;
            }

            if ($current >= $limit) {
                return false;
            }

            $mc->increment($key);
            return true;
        }

        private function tooMany()
        {
            return $this->jsonResponse(['error' => 'Too many requests'], 429);
        }

    /* ====================================================
       REGISTER
    ==================================================== */

        public function registerAction()
        {
            if (!$this->rateLimit('register:' . $_SERVER['REMOTE_ADDR'], 10, 600)) {
                return $this->tooMany();
            }

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
            $user->exchangeArray([
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
                'activated' => 0,
                'email_key' => bin2hex(random_bytes(32))
            ]);

            $this->getUserTable()->registerUser($user);

            return $this->jsonResponse(['message' => 'User registered']);
        }

    /* ====================================================
       RESTORE (SEND RESET KEY)
    ==================================================== */

        public function restoreAction()
        {
            if (!$this->rateLimit('restore:' . $_SERVER['REMOTE_ADDR'], 5, 600)) {
                return $this->tooMany();
            }

            if (!$this->getRequest()->isPost()) {
                return $this->jsonResponse(['error' => 'Method not allowed'], 405);
            }

            $email = trim($this->getRequest()->getPost('email'));

            if (!$email) {
                return $this->jsonResponse(['error' => 'Email required'], 400);
            }

            $key = bin2hex(random_bytes(32));

            $this->getUserTable()->restoreUser([
                'email' => $email,
                'email_key' => $key,
                'activated' => 0
            ]);

            $this->sendRestoreMail($email, $key);

            return $this->jsonResponse(['message' => 'Reset instructions sent']);
        }

    /* ====================================================
       RESET PASSWORD
    ==================================================== */

        public function resetAction()
        {
            if (!$this->getRequest()->isPost()) {
                return $this->jsonResponse(['error' => 'Method not allowed'], 405);
            }

            $data = $this->getRequest()->getPost();

            $email = $data['email'] ?? '';
            $key = $data['email_key'] ?? '';
            $pass = $data['password'] ?? '';
            $conf = $data['confirm_password'] ?? '';

            if (!$email || !$key || !$pass) {
                return $this->jsonResponse(['error' => 'Invalid data'], 400);
            }

            if ($pass !== $conf) {
                return $this->jsonResponse(['error' => 'Passwords do not match'], 400);
            }

            $user = $this->getUserTable()->searchSystemUser([
                'email' => $email,
                'email_key' => $key,
                'activated' => 0
            ]);

            if (!$user) {
                return $this->jsonResponse(['error' => 'Invalid reset key'], 400);
            }

            $this->getUserTable()->resetUser([
                'email' => $email,
                'password' => password_hash($pass, PASSWORD_DEFAULT),
                'activated' => 1
            ]);

            return $this->jsonResponse(['message' => 'Password updated']);
        }

    /* ====================================================
       CONFIRM EMAIL
    ==================================================== */

        public function confirmAction()
        {
            $email = $this->params('value1');
            $key = $this->params('value2');

            if (!$email || !$key) {
                return $this->jsonResponse(['error' => 'Invalid confirmation data'], 400);
            }

            $result = $this->getUserTable()->activateUser($email, $key);

            if (!$result) {
                return $this->jsonResponse(['error' => 'Activation failed'], 400);
            }

            return $this->jsonResponse(['message' => 'Account activated']);
        }

    /* ====================================================
       LOGIN (ACCESS + REFRESH)
    ==================================================== */

        public function loginAction()
        {
            if (!$this->rateLimit('login:' . $_SERVER['REMOTE_ADDR'], 5, 300)) {
                return $this->tooMany();
            }

            if (!$this->getRequest()->isPost()) {
                return $this->jsonResponse(['error' => 'Method not allowed'], 405);
            }

            $data = $this->getRequest()->getPost();

            $email = trim($data['email'] ?? '');
            $password = $data['password'] ?? '';

            if (!$email || !$password) {
                return $this->jsonResponse(['error' => 'Email and password required'], 400);
            }

            $user = $this->getUserTable()->searchSystemUser([
                'email' => $email,
                'activated' => 1
            ]);

            if (!$user || !password_verify($password, $user->password)) {
                return $this->jsonResponse(['error' => 'Invalid credentials'], 401);
            }

            $accessToken = bin2hex(random_bytes(32));
            $refreshToken = bin2hex(random_bytes(64));

            $accessHash = password_hash($accessToken, PASSWORD_DEFAULT);
            $refreshHash = password_hash($refreshToken, PASSWORD_DEFAULT);

            $accessExpires = date('Y-m-d H:i:s', strtotime('+15 minutes'));
            $refreshExpires = date('Y-m-d H:i:s', strtotime('+30 days'));

            $this->getUserTable()->storeTokens(
                $user->id,
                $accessToken,
                $accessExpires,
                $refreshToken,
                $refreshExpires
            );

            return $this->jsonResponse([
                'access_token' => $accessToken,
                'refresh_token' => $refreshToken,
                'access_expires' => $accessExpires
            ]);
        }

    /* ====================================================
       REFRESH
    ==================================================== */

    public function refreshAction()
    {
        if (!$this->rateLimit('refresh:' . $_SERVER['REMOTE_ADDR'], 10, 300)) {
            return $this->tooMany();
        }

        if (!$this->getRequest()->isPost()) {
            return $this->jsonResponse(['error' => 'Method not allowed'], 405);
        }

        $refreshToken = $this->getRequest()->getPost('refresh_token');

        if (!$refreshToken) {
            return $this->jsonResponse(['error' => 'Refresh token required'], 400);
        }

        $tokenRow = $this->getUserTable()->findByRefreshToken($refreshToken);

        if (!$tokenRow) {
            return $this->jsonResponse(['error' => 'Invalid or expired refresh token'], 401);
        }

        // revoke old token
        $this->getUserTable()->revokeTokenById($tokenRow->id);

        // generate new tokens
        $newAccess = bin2hex(random_bytes(32));
        $newRefresh = bin2hex(random_bytes(64));

        $newAccessExpires = date('Y-m-d H:i:s', strtotime('+15 minutes'));
        $newRefreshExpires = date('Y-m-d H:i:s', strtotime('+30 days'));

        // store new tokens (user_id из tokenRow)
        $this->getUserTable()->storeTokens(
            $tokenRow->user_id,
            $newAccess,
            $newAccessExpires,
            $newRefresh,
            $newRefreshExpires
        );

        return $this->jsonResponse([
            'access_token' => $newAccess,
            'refresh_token' => $newRefresh,
            'access_expires' => $newAccessExpires
        ]);
    }
    /* ====================================================
       AUTH BY ACCESS TOKEN
    ==================================================== */

    public function authByTokenAction()
    {
        $header = $this->getRequest()->getHeader('Authorization');

        if (!$header) {
            return $this->jsonResponse(['error' => 'Authorization header required'], 401);
        }

        $token = str_replace('Bearer ', '', $header->getFieldValue());

        $user = $this->getUserTable()->findByAccessToken($token);

        if (!$user) {
            return $this->jsonResponse(['error' => 'Invalid or expired token'], 401);
        }

        return $this->jsonResponse(['user_id' => $user->user_id]);
    }

    /* ====================================================
       LOGOUT
    ==================================================== */

    public function logoutAction()
    {
        $header = $this->getRequest()->getHeader('Authorization');

        if ($header) {
            $token = str_replace('Bearer ', '', $header->getFieldValue());
            $this->getUserTable()->revokeToken($token);
        }

        return $this->jsonResponse(['message' => 'Logged out']);
    }

    /* ====================================================
       MAIL HELPERS 
    ==================================================== */

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
    public function sendRegistrationMail($email, $key)
    {
        $uri = $this->getRequest()->getUri();
        $base = sprintf('%s://%s', $uri->getScheme(), $uri->getHost());
        $url = $base . "/user/confirm/email/" . $email . "/key/" . $key;
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $mail = new PHPMailer;
        $mail->isSMTP();
 
    }

    /* ====================================================
       HELPERS
    ==================================================== */

    private function jsonResponse($data, $status = 200)
    {
        http_response_code($status);
        return new JsonModel($data);
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
    private function getMemcached()
    {
        if (!$this->memcached) {
        $mc = new Memcached();
        $mc->addServer('memcached', 11211);
        }
        return $this->memcached;
    }
}