<?php 
namespace Tasks\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;
use Zend\Config\Config;
use Zend\Config\Factory;


class Boards
{
    public $id;
    public $admin;
    public $users_allowed;
    public $statuses;
    public $name;
    
    protected $inputFilter;
    
    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
      //  $this->admin = (isset($data['admin'])) ? $data['admin'] : null;
       // $this->users_allowed = (isset($data['users_allowed'])) ? $data['users_allowed'] : null;
       // $this->statuses = (isset($data['statuses'])) ? $data['statuses'] : null;
        $this->name = (isset($data['name'])) ? $data['name'] : null;
    }
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }
    public function setInputFilter(InputFilterInterface $inputFilter)
    {
        throw new \Exception("Not used");
    }
    public function getInputFilter()
    {
        
    }
    public function getAdapter()
    {
        $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        return $adapter;
        
    }
    
    
}
    