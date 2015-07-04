<?php
namespace Files\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;


class FilesToTags
{
    public $id;
	public $file_id;
	public $tag_id;

    protected $inputFilter;


    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
		$this->tag_id = (isset($data['tag_id'])) ? $data['tag_id'] : null;
        $this->file_id = (isset($data['file_id'])) ? $data['file_id'] : null;

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


           return $this->inputFilter;
    }

    public function getAdapter()
    {
        $config = new \Zend\Config\Config(include CONFIG_DIR . '/global.php');
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->adapter["filestotags"]->driver,
            'database' => $config->adapter["filestotags"]->database,
            'username' => $config->adapter["filestotags"]->username,
            'password' => $config->adapter["filestotags"]->password,
        ));
        return $adapter;

    }


}