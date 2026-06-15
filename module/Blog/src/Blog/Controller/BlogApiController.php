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
use User\Controller\UserApiController;


class BlogApiController extends Controller\preloaderController
{
    protected $blogTable;
    protected $friendsTable;

    public function blogFormAction()
    {
        $this->layout('layout/only_form');
    }

    public function saveBlogAction()
    {
        $token  = $this->getRequest()->getPost('token');
        $userId = $this->getUserTable()->findByAccessToken($token);
        if(!$userId) die(" invalid user");
        $request = $this->getRequest();
        $user_session = $_SESSION['user'];
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

        $token  = $this->getRequest()->getPost('token');
        $userId = $this->getUserTable()->findByAccessToken($token);
        if(!$userId) die(" invalid user");
        if (isset($this->getRequest()->getPost()->offset)) $offset = (int)$this->getRequest()->getPost()->offset;
        else $offset = 0;
        $blog = new Blog();
        $blogs = $this->getBlogTable()->getBlogs($userId, 'false', $offset, $blog->getAdapter());
        if(!empty($blogs)) {
            echo json_encode (array("blogs" => $blogs, 'user_id' => $userId, 'offset' => $offset));
            return false;
        }
        else {
            echo json_encode (array("blogs" => [], 'user_id' => $userId, 'offset' => $offset));
            return false;
        }
            echo json_encode (array("blogs" => [], 'user_id' => $userId, 'offset' => $offset));
            return false;
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
        $token  = $this->getRequest()->getPost('token');
        $userId = $this->getUserTable()->findByAccessToken($token);
        if(!$userId) die(" invalid user");
        $data = $this->getRequest()->getPost()->toArray();
        unset($data['token']);
        $data["user_id"] = $userId;
        $blogComment = new BlogCommentTable();
        $blogComment->addComment($data);
        echo "ok";
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
        $token  = $this->getRequest()->getPost('token');
        $userId = $this->getUserTable()->findByAccessToken($token);
        if(!$userId) die(" invalid user");
        $blog = new Blog();
        echo json_encode ( array("blogs" => $this->getBlogTable()->getBlogsForDelete($userId),$blog->getAdapter()));
        return false;
        
    }
    
    public function deleteBlogAction(){
        $request = $this->getRequest();
        $token  = $this->getRequest()->getPost('token');
        $userId = $this->getUserTable()->findByAccessToken($token);
        if(!$userId) die(" invalid user");
        $data = $this->getRequest()->getPost();
        if($this->getBlogTable()->deleteBlog($userId,$data["blog_id"]))
            die("deleted");
        die("error on blog delete");
    }
}
