<?php
namespace Settings\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;
use Zend\Config\Config;
use Zend\Config\Factory;


class Settings
{
    public $id;
    public $user_id;
    public $avatar;
    public $sex;
    public $birthdate;
    public $first_name;
    public $second_name;
    public $job;
    public $country;
    public $city;
    public $about;
    public $skype;
    public $phone;
    public $site;
    public $visibility;
    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->user_id = (isset($data['user_id'])) ? $data['user_id'] : null;
       // $this->avatar = (isset($data['avatar'])) ? $data['avatar'] : null;
        $this->sex = (isset($data['sex'])) ? $data['sex'] : null;
        $this->birthdate = (isset($data['birthdate'])) ? $data['birthdate'] : null;
        $this->first_name = (isset($data['first_name'])) ? $data['first_name'] : null;
        $this->second_name = (isset($data['second_name'])) ? $data['second_name'] : null;
        $this->job = (isset($data['job'])) ? $data['job'] : null;
        $this->country = (isset($data['country'])) ? $data['country'] : null;
        $this->city = (isset($data['city'])) ? $data['city'] : null;
        $this->about = (isset($data['about'])) ? $data['about'] : null;
        $this->skype = (isset($data['skype'])) ? $data['skype'] : null;
        $this->about = (isset($data['phone'])) ? $data['phone'] : null;
        $this->about = (isset($data['site'])) ? $data['site'] : null;
        $this->visibility = (isset($data['visibility'])) ? $data['visibility'] : 1;

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
                        'name' => '\Zend\Validator\File\Size',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => 5,
                            'max' => 1500000,
                        )
                    ))
)
            ));


            $inputFilter->add($factory->createInput(array(
                'name' => 'sex',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'birthdate',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'first_name',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'second_name',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'job',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'country',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'city',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'about',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'skype',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'phone',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'site',
                'required' => false,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
                'name' => 'visibility',
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