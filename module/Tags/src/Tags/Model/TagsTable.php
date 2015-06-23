<?php
namespace Tags\Model;

use Zend\Db\TableGateway\TableGateway;

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
        //    var_dump($tag);
        $result =   $this->tableGateway->select(array("name"=>$tag));
            $result = $result->toArray();
            var_dump($result);
            if(empty($result)) {
                $this->tableGateway->insert(array("name"=>$tag));

                $returnTags[] =  $this->tableGateway->lastInsertValue;;
            }
            else {

                $returnTags[] = $result[0]["id"];
            }
        }
        return $returnTags;


    }








}