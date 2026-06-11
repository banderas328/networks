<?php
namespace Frames\Controller;

use Frames\Model\Frames;
use Zend\View\Model\ViewModel;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;



class framesController extends Controller\preloaderController
{

    protected $framesTable;

        public function loadFramesAction(){
        $this->layout('layout/only_form');
        return @array('frames' => $this->getFramesTable()->getFrames());
    }

        public function saveFrameAction(){
        $this->layout('layout/only_form');
        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->getFramesTable()->createFrame($request);
        }
        echo json_encode("frame created");
        die();
    }

    public function deleteFrameAction(){

        $this->layout('layout/only_form');
        $request = $this->getRequest();
        $this->getFramesTable()->daleteFrame($request);
        return false;

    }


    public function getFramesTable()
    {
        if (!$this->framesTable) {
            $this->framesTable = new \Frames\Model\FramesTable;
        }
        return $this->framesTable;
    }


}

