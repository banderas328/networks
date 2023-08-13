<?php
namespace Main\Controller;
use Preloader;
use Preloader\Controller;

use Zend\I18n\Translator\Translator;
use Zend\Session\Container;

class MainController extends Controller\preloaderController
{
    public function __construct() {


    }

    public function indexAction()
    {
        parent::__construct();
        $this->layout('layout/main');

    }

//     public function setLocale () {
//         session_start();     
//         $user_session = $_SESSION['user'];
//         if($user_session->id) {
//             $lang = $user_session->user->lang;
//             $translator->addTranslationFile("phparray",$_SERVER["DOCUMENT_ROOT"]."/../config/language/"."lang.array.".$lang.'.php',false,$lang);
//             $translator->setLocale($lang);
//             $loc->get('ViewHelperManager')->get('translate')
//                 ->setTranslator($translator);
//         }
//     }




}
