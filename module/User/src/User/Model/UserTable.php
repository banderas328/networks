<?php

namespace User\Model;

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
    }


    public function registerUser(User $user)
    {
        $data = array(
            'login' => $user->login,
            'email' => $user->email,
            'password' => $user->password,
            'email_key' => $user->email_key
        );
        $id = (int)$user->id;
        if ($id == 0) {
            $this->tableGateway->insert($data);
            $userId = $this->tableGateway->lastInsertValue;

            $adapter = $user->getAdapter();
            $sql = "insert into users_filesystem (path,parent_path,user_id) values ('market','0'," . $userId . ")";
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
            $path = $_SERVER["DOCUMENT_ROOT"] . "/userfiles/" . $userId;
        } else {
            if ($this->getUser($id)) {
                $this->tableGateway->update($data, array('id' => $id));


            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function activateUser($email, $key)
    {
        $data = array('activated' => 1);
        if ($this->tableGateway->update($data, array('email' => $email, 'email_key' => $key, 'activated' => 0))) {
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
            'id', 'login', 'email', 'lang'
        );
        return $authAdapter->getResultRowObject($columnsToReturn);


    }

    public function searchUser($data, $adapter)
    {
            $select = new Select();
            $select->from('user_settings');
            $select->columns(array("user_id", "first_name", "second_name", 'avatar', 'job', 'country', 'city', 'phone', 'about'));
            $whereArray = [];
         //   var_dump($data);
         //   var_dump(get_object_vars($data));
        //    die();
            if ($data) {
                foreach ($data as $key => $value) {
                    if (($value != "") && ($key != 'submit') && ($key != 'visibility')) {
                        $whereArray[$key] = $value;
                    }
                }
            }
            $select->where($whereArray);
            $resultSetPrototype = new ResultSet();
            $resultSetPrototype->setArrayObjectPrototype(new Settings());
            $users = new DbSelect($select, $this->tableGateway->getAdapter(), $resultSetPrototype);
        //    var_dump($users->getItems(0,1000));die();
            return $users->getItems(0,1000);
    }

    public function changeUserLang($adapter, $request)
    {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $lang = $request->getPost()->lang;

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
    }

    public function setUserLang($lang, $userId)
    {
        $this->tableGateway->update(array("lang" => $lang), array('id' => $userId));
    }

}
