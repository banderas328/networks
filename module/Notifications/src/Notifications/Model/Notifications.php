<?php 
namespace Notifications\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;
use Zend\Config\Config;
use Zend\Config\Factory;


class Notifications
{
    public $id;
    public $text;
    public $html_id;

    
    protected $inputFilter;
    
    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->text = (isset($data['text'])) ? $data['text'] : null;
        $this->html_id = (isset($data['html_id'])) ? $data['html_id'] : null;
        $this->user_id = (isset($data['user_id'])) ? $data['user_id'] : null;
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
    