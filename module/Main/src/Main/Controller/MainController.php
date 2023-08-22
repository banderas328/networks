<?php
namespace Main\Controller;
use Preloader;
use Preloader\Controller;
class MainController extends Controller\preloaderController
{
    public function __construct() {


    }

    public function indexAction()
    {
        parent::__construct();
        $this->layout('layout/main');

    }

}
