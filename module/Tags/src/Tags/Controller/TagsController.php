<?php
namespace Tags\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Tags\Model\Tags;


class TagsController extends AbstractActionController
{
    protected $tagsTable;


    public function tagCloudAction(){
        $this->layout('layout/only_form');
        $limitForPage = 5;
        $page = (int)$this->params()->fromQuery('page', 1);
        $paginator = $this->getTagsTable()->getTagsCloud($limitForPage,$page);
        $paginator->setCurrentPageNumber((int)$this->params()->fromQuery('page', 1));
        $paginator->setItemCountPerPage($limitForPage);
        return array('paginator' => $paginator,'page' => $page , 'div' => "tagcloud");
    }




    public function getTagsTable()
    {
        if (!$this->tagsTable) {
            $sm = $this->getServiceLocator();
            $this->tagsTable = $sm->get('Tags\Model\TagsTable');
        }
        return $this->tagsTable;
    }
}