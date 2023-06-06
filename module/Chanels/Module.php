<?php
namespace Chanels;
use Chanels\Model\Chanels;
use Chanels\Model\ChanelsTable;
use Chanels\Model\ChanelsMessages;
use Chanels\Model\ChanelsMessagesTable;
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
                'Chanels\Model\ChanelsTable' =>  function($sm) {
                        $tableGateway = $sm->get('ChanelsTableGateway');
                        $table = new ChanelsTable($tableGateway);
                        return $table;
                    },
                'ChanelsTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Chanels());
                        return new TableGateway('chanels', $dbAdapter, null, $resultSetPrototype);
                    },
                'Chanels\Model\ChanelsMessagesTable' =>  function($sm) {
                    $tableGateway = $sm->get('ChanelsMessagesTableGateway');
                    $table = new ChanelsMessagesTable($tableGateway);
                    return $table;
                },
                'ChanelsMessagesTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new ChanelsMessages());
                    return new TableGateway('chanels_messages', $dbAdapter, null, $resultSetPrototype);
                },
            ),
        );
    }

}