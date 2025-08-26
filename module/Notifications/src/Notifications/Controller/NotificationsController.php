<?php

namespace Notifications\Controller;

use Zend\View\Model\ViewModel;
use Notifications\Model\Notifications;
use Notifications\Model\NotificationsTable;
use Preloader\Controller;
use Zend\Config\Config;
use Zend\Config\Factory;


class NotificationsController extends Controller\preloaderController
{

    protected $notificationsTable;

    public function indexAction()
    {
        $this->layout('layout/only_form');
        echo json_encode($this->getNotificationsTable()->getNotifications());
        die();
    }

    public function getNotificationsTable()
    {

        if (!$this->notificationsTable) {
            $this->notificationsTable = new \Notifications\Model\NotificationsTable;
        }
        return $this->notificationsTable;
    }


}

