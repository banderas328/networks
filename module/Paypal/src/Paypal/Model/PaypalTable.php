<?php
namespace Paypal\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class PaypalTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function savePayment($data) {

        $this->tableGateway->insert($data);
    }

    public function getUserPayments($data) {

     return $this->tableGateway->select($data);
}

    public  function getPayment($data,$adapter) {
        $id = (int) $data['id'];
        $user_id = (int) $data['user_id'];
        $sql = "select distinct *  from paypal where id=".$id." and user_id=".$user_id;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet->toArray();

    }

    public function updatePayment($data){
        $this->tableGateway->update($data,array('payment_id' => $data['payment_id']));
    }








}