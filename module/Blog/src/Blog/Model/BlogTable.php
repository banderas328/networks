<?php
namespace Blog\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Session\Container;

class BlogTable
{
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
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
                var_dump($post);
                if($this->is_image(getcwd(). "/public/".$file . $post['file']['name']) and ($post['file']["size"] < 200000)) {
                    exec("convert ".getcwd(). "/public/".$file . $post['file']['name']." 50% ".getcwd(). "/public/".$file . $post['file']['name']);
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

        $sql = "select * from blogs
               left JOIN blog_attachment
               on blogs.id = blog_attachment.blog_id
                left JOIN user_settings
                on blogs.user_id = user_settings.user_id
               WHERE blogs.user_id = ".$userId." or blogs.user_id ".$sqlIn." order by blogs.date desc limit 7 offset ".$offset;
        $resultSet = $adapter->query($sql, $adapter::QUERY_MODE_EXECUTE);
        return $resultSet;
}






}