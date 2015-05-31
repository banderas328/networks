<?php
namespace Friends\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;


class Friends
{
    public $id;
	public $file_name;
	public $user_id;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['user_id'])) ? $data['user_id'] : null;
		$this->file_name = (isset($data['friend_id'])) ? $data['friend_id'] : null;
        $this->user_id = (isset($data['status'])) ? $data['status'] : null;

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