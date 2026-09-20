<?php
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{

    
    public function indexAction()
    {

        return new ViewModel();
    }
    public function octopusAction()
    {
        $this->layout('layout/layout');

        return new ViewModel();
    }
    public function donateAction()
    {
        $this->layout('layout/layout');
        return new ViewModel();
    }
}
