<?php
namespace Chanels\Model;


use Zend\InputFilter\InputFilterInterface;
use Zend\Config\Config;
use Zend\Config\Factory;

class ChanelsMessages
{
    public $id;
    public $text;
    public $date;
    public $to_chanel;
    public $from_user;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->from_user = (isset($data['from_user_id'])) ? $data['from_user_id'] : null;
        $this->to_chanel = (isset($data['to_chanel'])) ? $data['to_chanel'] : null;
        $this->text = (isset($data['text'])) ? $data['text'] : null;
        $this->date = (isset($data['date'])) ? $data['date'] : null;

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

    }


}