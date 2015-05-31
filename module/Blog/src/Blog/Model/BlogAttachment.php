<?php
namespace Blog\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
use Zend\InputFilter\InputFilterInterface;

class BlogAttachment
{
    public $id;
    public $file_name;
    public $blog_id;


    public function exchangeArray($data)
    {
        $this->id     = (isset($data['id'])) ? $data['id'] : null;
        $this->file_name = (isset($data['file_name'])) ? $data['file_name'] : null;
        $this->blog_id  = (isset($data['blog_id'])) ? $data['blog_id'] : null;

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
        $config = new \Zend\Config\Config(include CONFIG_DIR . '/global.php');
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->adapter["userfiles"]->driver,
            'database' => $config->adapter["userfiles"]->database,
            'username' => $config->adapter["userfiles"]->username,
            'password' => $config->adapter["userfiles"]->password,
            'options' => array(
                \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'',
                \PDO::MYSQL_ATTR_INIT_COMMAND => 'SET CHARACTER SET \'UTF8\''
            )
        ));

        return $adapter;

    }


}