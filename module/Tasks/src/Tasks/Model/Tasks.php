<?php
namespace Tasks\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
//use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;
use Zend\Config\Config;
use Zend\Config\Factory;


class Tasks
{
    public $id;
    public $board_id;
    public $status;
    public $users;
    public $name;
    public $description;
    public $parent_task;
    public $attachments;
    public $estimate;
    public $is_archive;

    protected $inputFilter;

    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->board_id = (isset($data['board_id'])) ? $data['board_id'] : null;
        $this->status = (isset($data['status'])) ? $data['status'] : null;
        $this->users = (isset($data['users'])) ? $data['users'] : null;
        $this->name = (isset($data['name'])) ? $data['name'] : null;
        $this->description = (isset($data['description'])) ? $data['description'] : null;
        $this->parent_task = (isset($data['parent_task'])) ? $data['parent_task'] : null;
        $this->is_archive = (isset($data['is_archive'])) ? $data['is_archive'] : null;
        $this->estimate = (isset($data['estimate'])) ? $data['estimate'] : null;
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
