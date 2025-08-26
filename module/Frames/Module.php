<?php
namespace Frames;
use Frames\Model\Frames;
use Frames\Model\FramesTable;
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
                'Frames\Model\FramesTable' =>  function($sm) {
                        $tableGateway = $sm->get('FramesTableGateway');
                        $table = new FramesTable($tableGateway);
                        return $table;
                    },
                'FramesTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Frames());
                        return new TableGateway('frames', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }

}
