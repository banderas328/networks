<?php
namespace Payment\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Zend\Db\Adapter;


class Payment
{
    public $id;
    public $payment_id;
    public $payment_status;
    public $user_id;

    public function exchangeArray($data)
    {
        $this->id = (isset($data['id'])) ? $data['id'] : null;
        $this->payment_id = (isset($data['payment_id'])) ? $data['payment_id'] : null;
        $this->payment_status = (isset($data['payment_status'])) ? $data['payment_status'] : null;
        $this->user_id = (isset($data['user_id'])) ? $data['user_id'] : null;

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