<?php
namespace  Network;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Network\Model\Network;
use Network\Model\NetworkTable;


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
                'Network\Model\NetworkTable' =>  function($sm) {
                        $tableGateway = $sm->get('NetworkTableGateway');
                        $table = new NetworkTable($tableGateway);
                        return $table;
                    },
                'NetworkTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Network());
                        return new TableGateway('network', $dbAdapter, null, $resultSetPrototype);
                    },

            ),
        );
    }

}