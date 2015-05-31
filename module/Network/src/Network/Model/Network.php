<?php
namespace Network\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;


class Network
{
    public $id;
    public $path_id;
    public $is_public;
    public $is_password;
    public $password;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->path_id = (isset($data['path_id'])) ? $data['path_id'] : null;
        $this->is_public = (isset($data['is_public'])) ? $data['is_public'] : null;
        $this->is_password = (isset($data['is_password'])) ? $data['is_password'] : null;
        $this->password = (isset($data['password'])) ? $data['password'] : null;

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
        $config = new \Zend\Config\Config(include CONFIG_DIR . '/global.php');
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->adapter["userfiles"]->driver,
            'database' => $config->adapter["userfiles"]->database,
            'username' => $config->adapter["userfiles"]->username,
            'password' => $config->adapter["userfiles"]->password,
        ));
        return $adapter;

    }


}