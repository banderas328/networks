<?php
namespace Blog\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class BlogCommentTable
{
    protected $tableGateway;
    protected $adapter;

    public function __construct()
    {
        $config  =  new Config(Factory::fromFile('config/autoload/global.php'), true);
        $adapter = new \Zend\Db\Adapter\Adapter (array(
            'driver' => $config->database->driver,
            'dsn' => $config->database->dsn,
            'database' => $config->database["params"]->database,
            'username' => $config->database["params"]->username,
            'password' => $config->database["params"]->password,
        ));
        $this->adapter = $adapter;
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("blog_comment",$adapter);
    }

    public function addComment($data) {
        $this->tableGateway->insert($data);
    }

    public function getComments($data){
     $offset  = (int)$data["comment_count"];
     $blog_id = (int)$data["blog_id"];
     $sql = "select * from blog_comment left join user_settings on user_settings.user_id = blog_comment.user_id 
      where blog_id=".$blog_id." order by blog_comment.id desc limit 3 offset ".$offset;
     $results = $this->adapter->query($sql, $this->adapter::QUERY_MODE_EXECUTE);
     return $results->toArray();

    }
}