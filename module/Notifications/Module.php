<?php
namespace Notifications;
use Notifications\Model\Notifications;
use Notifications\Model\NotificationsTable;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;


class Module
{
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php',
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }
    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'Notifications\Model\NotificationsTable' =>  function($sm) {
                    $tableGateway = $sm->get('NotificationsTableGateway');
                    $table = new NotificationsTable($tableGateway);
                    return $table;
                    },
                'NotificationsTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new Blog());
                    return new NotificationsGateway('notifications', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }

}