<?php
namespace Blog\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;

class BlogAttachmentTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }




}