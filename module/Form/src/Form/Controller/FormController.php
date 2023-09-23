<?php
namespace Form\Controller;

use Preloader\Controller\preloaderController;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Form\Model\Form;
use Zend\Session\Container;


class FormController extends preloaderController
{
    protected $formTable;

    public function getFormTable()
    {
        if (!$this->formTable) {
            $sm = $this->getServiceLocator();
            $this->formTable = $sm->get('Form\Model\FormTable');
        }
        return $this->formTable;
    }

    public function indexAction(){
        $this->layout('layout/only_form');

        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $isFormExists = $this->getFormTable()->getUserForm($userId);
        $formExists = true;
        if(empty($isFormExists)) {

            $formExists = false;
        }
        return array("formExists" =>$formExists);

    }

    public function getUserFormAction(){



    }

    public function createFormAction(){
        session_start();        $user_session = $_SESSION['user'];
        $userId = $user_session["id"];
        $this->getFormTable()->createForm($userId);
        die();

    }



}
