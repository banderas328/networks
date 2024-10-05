<?php

namespace Preloader\Controller;

use Zend\Mvc\Controller\AbstractActionController;

//use Zend\Stdlib\RequestInterface as Request;
use Zend\Session\Container;

class  preloaderController extends AbstractActionController
{
    function __construct()
    {
        if(session_status() !== PHP_SESSION_ACTIVE) session_start();
        $this->isAuthed();

    }

    public function isAuthed()
    {

        //  $uri = $_SERVER['REQUEST_URI'];

        $uri = explode("/", $_SERVER['REQUEST_URI']);
        if (isset($uri[2])) {
            $uri = "/" . $uri[1] . "/" . $uri[2];

            if (
                ($uri != "/user/register")
                && ($uri != "/user/login")
                && ($uri != "/user/confirm")
                && ($uri != "/user/restore")
                && ($uri != "/user/reset")
                && !isset($_SESSION['user'])
            ) {
                $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . '/user/login';
                header("location: $actual_link");
                die();

            }
        } elseif ($uri[1] == 'main' or $uri[1] == 'main?') {

            if (!isset($_SESSION['user'])) {
                $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . '/user/login';
                header("Location: $actual_link");
                die();
            }
        } elseif ($uri == '/') {

            if (!isset($_SESSION['user'])) {
                $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . '/';
                header("Location: $actual_link");
                die();
            }
        } elseif ($uri[1] == 'octopus') {

            if (!isset($_SESSION['user'])) {
                $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . '/octopus';
                header(":Location: $actual_link");
                die();
            }
        } else {

            $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . '/user/login';
            header("Location: $actual_link");
            die();
        }
    }
}
