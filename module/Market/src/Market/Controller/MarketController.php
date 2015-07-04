<?php
namespace Market\Controller;

use Preloader\Controller\preloaderController;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Market\Model\Market;
use Files\Model\PayedFiles;
use Files\Model\PayedFilesTable;
use Files\Model\FilesToTags;
use Files\Model\FilesToTagsTable;


class MarketController extends preloaderController
{
    protected $marketTable;
    protected $filesToTagsTable;
    protected $payedfileTable;

    public function getMarketTable()
    {
        if (!$this->marketTable) {
            $sm = $this->getServiceLocator();
            $this->marketTable = $sm->get('Market\Model\MarketTable');
        }
        return $this->marketTable;
    }
    public function getFilesToTagsTable()
    {
        if (!$this->filesToTagsTable) {
            $sm = $this->getServiceLocator();
            $this->filesToTagsTable = $sm->get('Files\Model\FilesToTagsTable');
        }
        return $this->filesToTagsTable;
    }

    public function getPayedFilesTable()
    {
        if (!$this->payedfileTable) {
            $sm = $this->getServiceLocator();
            $this->payedfileTable = $sm->get('Files\Model\PayedFilesTable');
        }
        return $this->payedfileTable;
    }

    public function getMarketFilesOnTagsAction(){
        $this->layout('layout/only_form');
        $tag_id = $this->getRequest()->getPost()->tag_id;
        $files =  $this->getFilesToTagsTable()->getFilesOnTag($tag_id);
        $payedFiles = new PayedFiles();
        $files =  $this->getPayedFilesTable()->getPayedFiles($files,$payedFiles->getAdapter());

        return array('files' => $files);
    }
}