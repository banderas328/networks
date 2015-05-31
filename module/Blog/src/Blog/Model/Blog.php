<?php
namespace Blog\Model;

use Zend\InputFilter\Factory as InputFactory;     // <-- Add this import
use Zend\InputFilter\InputFilter;                 // <-- Add this import
use Zend\InputFilter\InputFilterAwareInterface;   // <-- Add this import
use Zend\InputFilter\InputFilterInterface;

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