<?php
namespace Files\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Db\Sql\Sql;
use Zend\Db\Sql\Select as Select;
//use Zend\Db\Adapter\Driver\ResultInterface;
//use Zend\Db\ResultSet\ResultSet;


class FilesToTagsTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function updateFileTags($fileId,$tags) {

        $this->tableGateway->delete(array('file_id' => $fileId));
        foreach($tags as $tag) {
            $this->tableGateway->insert(array('file_id'=> $fileId,"tag_id" => $tag));
        }
    }
    public function deleteFileTags($file_id) {

        return $this->tableGateway->delete(array("file_id" => $file_id));
    }
    public function getFilesOnTag($tag_id){
        $tag_id = (int) $tag_id;
        $results = $this->tableGateway->select(array("tag_id" => $tag_id));
        $results = $results->toArray();
        return $results;
    }















}