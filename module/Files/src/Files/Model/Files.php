<?php
namespace Files\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;


class Files
{
    public $id;
	public $file_name;
	public $user_id;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
		$this->file_name = (isset($data['file_name'])) ? $data['file_name'] : null;
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


        if (!$this->inputFilter) {
            $inputFilter = new InputFilter();
            $factory = new InputFactory();
            $inputFilter->add($factory->createInput(array(
                'name' => 'avatar',
                'required' => false,
                'validators' => array(
                    array(
                        'name' => 'File\Size',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => 5,
                            'max' => 1500000,
                        )
                    )))
            ));




            $inputFilter->add($factory->createInput(array(
                'name' => 'title',
                'required' => false,
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



















































































































































































































































































































































































































































































































