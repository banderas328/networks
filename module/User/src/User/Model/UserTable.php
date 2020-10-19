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




class UserTable
{
    protected $tableGateway;

    public function __construct()
    {
        $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
        //  $config = Factory::fromFile(glob('config/autoload/global.php'));
        //  var_dump($config->database["params"]->host);
        //  die();
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
       // return $adapter;
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("user",$adapter);
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
            $userId =  $this->tableGateway->lastInsertValue;
            $adapter = $user->getAdapter();
            $sql = "insert into users_filesystem (path,parent_path,user_id) values ('market','0',".$userId.")";
            $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
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
    public function authUser($email,$password,$dbAdapter)
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
    public function searchUser($data,$adapter,$page,$limit,$paginated=false) {
        if($paginated) {
            $select = new Select();
            $select->from('user_settings');  // base table
            foreach($data as $key => $value) {
                if(($value != "") && ($key != 'submit') && ($key != 'visibility')) {
					$select->where->like($key, "%".$value."%");
                    $select->where->like('visibility', "1");
                }
            }
            if($page != 1) {
                $select->offset($page *  $limit);
            }
            $select->limit($limit);

            $resultSetPrototype = new ResultSet();
            $resultSetPrototype->setArrayObjectPrototype(new Settings());
            $paginatorAdapter = new DbSelect($select,$this->tableGateway->getAdapter(),$resultSetPrototype);
            $paginator = new Paginator($paginatorAdapter);
            return $paginator;

        }

    }
    public function changeUserLang($adapter,$request) {
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $lang = $request->getPost()->lang;

        switch($lang) {
            case "en" : $this->setUserLang($lang,$userId);break;
            case "ru" : $this->setUserLang($lang,$userId);break;
                default : $this->setUserLang("en",$userId);break;
       }
    }

    public function setUserLang($lang,$userId) {
        $this->tableGateway->update(array ("lang" => $lang), array('id' => $userId));
    }

}