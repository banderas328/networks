<?php
namespace Market\Controller;

use Files\Model\Files;
use Preloader\Controller\preloaderController;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Market\Model\Market;
use Files\Model\PayedFiles;
use Files\Model\FileSystem;
use Files\Model\PayedFilesTable;
use Files\Model\FilesToTags;
use Files\Model\FilesToTagsTable;
use Zend\Session\Container;


class MarketController extends preloaderController
{
    protected $marketTable;
    protected $filesToTagsTable;
    protected $payedfileTable;
    protected $walletTable;
    protected $filesystemTable;
    protected $filesTable;

    public function getMarketTable()
    {
        if (!$this->marketTable) {
            $sm = $this->getServiceLocator();
            $this->marketTable = $sm->get('Market\Model\MarketTable');
        }
        return $this->marketTable;
    }
    public function getFilesSystemTable()
    {
        if (!$this->filesystemTable) {
            $sm = $this->getServiceLocator();
            $this->filesystemTable = $sm->get('Files\Model\FileSystemTable');
        }
        return $this->filesystemTable;
    }
    public function getFilesTable()
    {
        if (!$this->filesTable) {
            $sm = $this->getServiceLocator();
            $this->filesTable= $sm->get('Files\Model\FilesTable');
        }
        return $this->filesTable;
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
    public function getWalletTable()
    {
        if (!$this->walletTable) {
            $sm = $this->getServiceLocator();
            $this->walletTable = $sm->get('Payment\Model\WalletTable');
        }
        return $this->walletTable;
    }

    public function getMarketFilesOnTagsAction(){
        $this->layout('layout/only_form');
        $tag_id = $this->getRequest()->getPost()->tag_id;
        $files =  $this->getFilesToTagsTable()->getFilesOnTag($tag_id);
        $payedFiles = new PayedFiles();
        $files =  $this->getPayedFilesTable()->getPayedFiles($files,$payedFiles->getAdapter());
        return array('files' => $files);
    }

    public function byeFileAction(){
        $this->layout('layout/only_form');
        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $file_id = $this->getRequest()->getPost()->file_id;
        $payedFiles = new PayedFiles();
        $file =  $this->getPayedFilesTable()->getPayedFiles(array("file_id" => $file_id),$payedFiles->getAdapter());
        $fileCost = $file[0]['cost'];
        $data = array("user_id" => $userId);

        $wallet =   $this->getWalletTable()->getWallet($data,true);
        if($wallet['balance'] < $fileCost) {
            die("not enought money");
        }
        else {
           if(!$this->getMarketTable()->checkBuedFile($file_id) and $file_id) {
               $walletBalance = $wallet['balance'] - $fileCost;

               $this->getWalletTable()->updateWallet(array('user_id' => $userId , 'balance' => $walletBalance ,'id' => $wallet['id'] ));
               $date = date('l jS \of F Y h:i:s A');
               $this->getMarketTable()->bueFile(array("file_id" => $file[0]['file_id'],'user_id' => $userId, 'cost' => $fileCost , 'date' => $date));
               $files = new Files();
               $this->getFilesTable()->copyFileToMarketDir($files->getAdapter(),$file[0]);

               die("you bue this file");

           }
            else {
                die ("you already bue this file");
            }

        }

    }
}
