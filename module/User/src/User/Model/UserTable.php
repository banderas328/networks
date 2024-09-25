<?php

namespace User\Model;

use Couchbase\UserSettings;
use Settings\Model\Settings;
use Zend\Db\TableGateway\TableGateway;
use Zend\Authentication\Adapter\DbTable as AuthAdapter;
use Zend\Db\Sql\Select;

//use Zend\Db\Sql\Sql;
use Zend\Paginator\Paginator;
use Zend\Db\ResultSet\ResultSet;
use Zend\Paginator\Adapter\DbSelect;
use Zend\Db\Sql\Predicate\Like;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;
use Zend\Db\Sql\Sql;


class UserTable
{
    protected $tableGateway;

    public function __construct()
    {
        $config = new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("user", $adapter);
        $this->adapter = $adapter;
    }


    public function registerUser(User $user)
    {
        $data = array(
            'login' => $user->login,
            'email' => $user->email,
            'password' => $user->password,
            'email_key' => $user->email_key,
            'activated' => '1',
        );
        $id = (int)$user->id;
        if ($id == 0) {
            $dataUser = $this->tableGateway->select(['email' => $data['email']]);
            if(count($dataUser)) return "user with such email exist";
            $this->tableGateway->insert($data);
            $userId = $this->tableGateway->lastInsertValue;
            $adapter = $user->getAdapter();
            $sql = "insert into users_filesystem (path,parent_path,user_id) values ('docs','0'," . $userId . ")";
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            $path = $_SERVER["DOCUMENT_ROOT"] . "/userfiles/" . $userId;
            mkdir($path);
        } else {
            if ($this->getUser($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function restoreUser($data)
    {
        if ($this->tableGateway->update(array('activated' => 0,'email_key' => $data['email_key']), array('email' => $data["email"]))) {
            return true;
        } else {
            return false;
        }
    }
    public function resetUser($data)
    {
        if ($this->tableGateway->update($data, array('email' => $data["email"],'email_key' => $data["email_key"]))) {
            return true;
        } else {
            return false;
        }
    }

    public function activateUser($email, $key)
    {
        if ($this->tableGateway->update(array('activated' => 1),array ('email_key' => $key,'email' => $email, 'activated' => 0))) {
            return true;
        } else {
            return false;
        }
    }

    public function authUser($email, $password, $dbAdapter)
    {
        $authAdapter = new AuthAdapter($dbAdapter,
            'user',
            'email',
            'password'
        );
        $authAdapter
            ->setIdentity($email)
            ->setCredential($password);
        $authAdapter->authenticate();
        $columnsToReturn = array(
            'id', 'login', 'email','lang'
        );
        return $authAdapter->getResultRowObject($columnsToReturn);


    }
    public function searchSystemUser($data)
    {
        $user = $this->tableGateway->select($data);
        foreach ($user as $userRow) {
            return $userRow;
        }
    }

    public function searchUser($data)
    {

    }

    public function changeUserLang($adapter, $request)
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $lang = $request->getPost()->lang;
        
        if($lang) {
            switch ($lang) {
                case "en" :
                    $this->setUserLang($lang, $userId);
                    break;
                case "ru" :
                    $this->setUserLang($lang, $userId);
                    break;
                default :
                    $this->setUserLang("en", $userId);
                    break;
            }
            $user_session["lang"] = $lang;
            
        }


    }

    public function setUserLang($lang, $userId)
    {
        $this->tableGateway->update(array("lang" => $lang), array('id' => $userId));
    }

}
