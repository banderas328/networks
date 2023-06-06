<?php
namespace Tags\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Select;
//use Zend\Db\Sql\Sql;
use Zend\Paginator\Paginator;
use Zend\Db\ResultSet\ResultSet;
use Zend\Paginator\Adapter\DbSelect;

class TagsTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function updateTags($tags) {
        $returnTags = array();
        foreach($tags as $tag) {
        $result =   $this->tableGateway->select(array("name"=>$tag));
            $result = $result->toArray();
            if(empty($result)) {
                $this->tableGateway->insert(array("name"=>$tag));

                $returnTags[] =  $this->tableGateway->lastInsertValue;;
            }
            else {
                var_dump($result);

                $returnTags[] = $result[0]["id"];
            }
        }
        var_dump($returnTags);
        return $returnTags;


    }

    public function getTagsCloud($limit,$page) {

        $select = new Select();
        $select->from('tags');  // base table
        if($page != 1) {
            $select->offset($page *  $limit);
        }
        $select->limit($limit);

        $resultSetPrototype = new ResultSet();
        $resultSetPrototype->setArrayObjectPrototype(new Tags());
        $paginatorAdapter = new DbSelect($select,$this->tableGateway->getAdapter(),$resultSetPrototype);
        $paginator = new Paginator($paginatorAdapter);
        return $paginator;
    }








}