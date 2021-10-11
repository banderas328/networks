<?php
namespace Blog\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;
use Zend\Config\Config;
use Zend\Config\Factory;

class BlogTable
{
    protected $tableGateway;

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
        $this->tableGateway = new \Zend\Db\TableGateway\TableGateway("blogs",$adapter);
    }

    public function saveBlog($post,$userId,$adapter) {

        $text = htmlspecialchars($post['text']);
        $data = array ("user_id" => $userId,"blog_content" => $text , 'date' => time());
        $this->tableGateway->insert($data);
        $id = $this->tableGateway->lastInsertValue;
        if($post['file']['tmp_name']) {
            $type = array('jpg','png','jpeg');

                $path = "/img/blog_images";
                $fileName = uniqid();
                $file = $path . '/' . $fileName;
                move_uploaded_file($post['file']['tmp_name'], getcwd() . "/public/" . $file . $post['file']['name']);
                if(($post['file']["size"] < 200000)) {
                   
                    $data['file_name'] =$file . $post['file']['name'];
                }
                else {
                    @unlink(getcwd(). "/public/".$file . $post['file']['name']);
                }
                $data['file_name'] = $file . $post['file']['name'];
                $data['blog_id'] = $id;
                $sql = "insert into blog_attachment (file_name,blog_id) values ('" . $data['file_name'] . "'," . $data['blog_id'] . ")";
                $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);

        }

    }


    public function getBlogs($userId,$friends,$offset,$adapter){
     $sqlIn = " IN (";
        $needComma  = false;
    foreach ($friends as $friend) {
        if(!$needComma) $sqlIn .= $friend['user_id'];
        else $sqlIn .= ",".$friend['user_id'];
        $needComma = true;
    }
        $sqlIn .= ")";

        $sql = "select blogs.id as blog_id,blogs.blog_content,user_settings.first_name,
       user_settings.second_name,blog_attachment.file_name from blogs
               left JOIN blog_attachment
               on blogs.id = blog_attachment.blog_id
                left JOIN user_settings
                on blogs.user_id = user_settings.user_id
               WHERE blogs.user_id = ".$userId." or blogs.user_id ".$sqlIn." order by blogs.date desc limit 7 offset ".$offset;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
}






}