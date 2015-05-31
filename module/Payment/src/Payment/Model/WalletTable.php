<?php
namespace Payment\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;

//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class WalletTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

  public function getWallet($data) {
      return $this->tableGateway->select($data);
  }
    public function updateWallet($data) {
        $this->tableGateway->update($data,array('id' => $data['id']));
    }

    public function saveWallet($data) {

        $this->tableGateway->insert($data);
    }









}