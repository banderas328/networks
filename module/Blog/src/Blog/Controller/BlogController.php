<?php
namespace Blog\Controller;


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




   public function blogFormAction () {
       $this->layout('layout/only_form');


   }

    public function saveBlogAction(){
        $request = $this->getRequest();
        $text = $request->getPost()->text;
        //$blog = new Blog();
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        $post = array_merge_recursive(
            $request->getPost()->toArray(),
            $request->getFiles()->toArray()
        );
        $blog = new Blog();
        $this->getBlogTable()->saveBlog($post,$userId,$blog->getAdapter());
        die();

}


    public function getBlogsAction(){
        $this->layout('layout/only_form');
        $user_session = new Container('user');
        $userId = $user_session->user->id;
        if(isset($this->getRequest()->getPost()->offset)) $offset = (int) $this->getRequest()->getPost()->offset;
        else $offset = 0;
        $friends = new Friends();
        $friends = $this->getFriendsTable()->getFriends($userId,$friends->getAdapter());
        if($friends) {
            $blog = new Blog();
            
            $blogs = $this->getBlogTable()->getBlogs($userId,$friends->toArray(),$offset,$blog->getAdapter());
            //      echo "<pre>";
            //  var_dump($blogs->toArray());
            return array("blogs" => $blogs->toArray() , 'user_id' => $userId , 'offset' => $offset);
        }
      else {
          return array("blogs" => [] , 'user_id' => $userId , 'offset' => $offset);
          
      }
    }








    public function getBlogTable()
    {
        if (!$this->blogTable) {
         //   $sm = $this->getServiceLocator();
         //   $this->blogTable = $sm->get('Blog\Model\BlogTable');
            $this->blogTable = new \Blog\Model\BlogTable;
        }
        return $this->blogTable;
    }

    public function getFriendsTable()
    {
        if (!$this->friendsTable) {
            //$sm = $this->getServiceLocator();
           // $this->friendsTable = $sm->get('Friends\Model\FriendsTable');
            $this->friendsTable = new \Friends\Model\FriendsTable;
        }
        return $this->friendsTable;
    }




}