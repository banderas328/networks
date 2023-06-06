<?php
namespace Messages\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;
use Zend\Config\Config;
use Zend\Config\Factory;


class Messages
{
    public $id;
    public $text;
    public $date;
    public $to_user;
    public $from_user;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
		$this->from_user = (isset($data['from_user_id'])) ? $data['from_user_id'] : null;
        $this->to_user = (isset($data['to_user'])) ? $data['to_user'] : null;
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

    public function getInputFilter()
    {


        if (!$this->inputFilter) {
            $inputFilter = new InputFilter();
            $factory = new InputFactory();
            $inputFilter->add($factory->createInput(array(
                'name' => 'text',
                'required' => false,
                'StringLength' => array("max" => 10),
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),

                ),
            )));


            $this->inputFilter = $inputFilter;
       }

        return $this->inputFilter;
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