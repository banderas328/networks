<?php

namespace Blog\Controller;


use Blog\Model\BlogComment;
use Blog\Model\BlogCommentTable;
use Friends\Model\Friends;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Blog\Model\Blog;
use Blog\Model\BlogTable;
use Preloader\Controller;
use Zend\Session\Container;


class BlogController extends Controller\preloaderController
{
    protected $blogTable;
    protected $friendsTable;

    public function blogFormAction()
    {
        $this->layout('layout/only_form');
    }

    public function saveBlogAction()
    {
        $request = $this->getRequest();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $post = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        $blog = new Blog();
        $this->getBlogTable()->saveBlog($post, $userId, $blog->getAdapter());
        die();
    }


    public function getBlogsAction()
    {
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        if (isset($this->getRequest()->getPost()->offset)) $offset = (int)$this->getRequest()->getPost()->offset;
        else $offset = 0;
        $blog = new Blog();
        $blogs = $this->getBlogTable()->getBlogs($userId, 'false', $offset, $blog->getAdapter());
        if(!empty($blogs)) {
            return array("blogs" => $blogs, 'user_id' => $userId, 'offset' => $offset);
        }
        else {
            return array("blogs" => [], 'user_id' => $userId, 'offset' => $offset);
        }
            return array("blogs" => [], 'user_id' => $userId, 'offset' => $offset);
    }

    public function getBlogTable()
    {
        if (!$this->blogTable) {
            $this->blogTable = new \Blog\Model\BlogTable;
        }
        return $this->blogTable;
    }

    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
            $this->friendsTable = new \Friends\Model\FriendsTable;
        }
        return $this->friendsTable;
    }

    public function addCommentToBlogAction()
    {
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $data = $this->getRequest()->getPost()->toArray();
        $data["user_id"] = $userId;
        $blogComment = new BlogCommentTable();
        $blogComment->addComment($data);
        die();
    }

    public function getCommentsAction(){
        $this->layout('layout/only_form');
        $data = $this->getRequest()->getPost()->toArray();
        $blogComment = new BlogCommentTable();
        echo json_encode($blogComment->getComments($data));
        die();

    }
    
    public function deleteBlogsAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $blog = new Blog();
        return array("blogs" => $this->getBlogTable()->getBlogsForDelete($userId),$blog->getAdapter());
        
    }
    
    public function deleteBlogAction(){
        $request = $this->getRequest();
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $data = $this->getRequest()->getPost();
        if($this->getBlogTable()->deleteBlog($userId,$data["blog_id"]))
            die("deleted");
        die("error on blod delete");
    }
}
