<?php
namespace Blog\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
use Zend\InputFilter\InputFilterInterface;
use Zend\Config\Config;
use Zend\Config\Factory;

class Blog
{
    public $id;
    public $blog_content;
    public $user_id;
    protected $date;

    public function exchangeArray($data)
    {
        $this->id     = (isset($data['id'])) ? $data['id'] : null;
        $this->blog_content = (isset($data['blog_content'])) ? $data['blog_content'] : null;
        $this->user_id  = (isset($data['user_id'])) ? $data['user_id'] : null;
        $this->date  = (isset($data['date'])) ? $data['date'] : null;
    }
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }

    public function setInputFilter(InputFilterInterface $inputFilter)
    {
        throw new \Exception("Not used");
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

        return $adapter;

    }


}