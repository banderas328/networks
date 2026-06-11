<?php
namespace  Paypal;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Paypal\Model\Paypal;
use Paypal\Model\PaypalTable;


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
                'Paypal\Model\PaypalTable' =>  function($sm) {
                        $tableGateway = $sm->get('PaypalTableGateway');
                        $table = new PaypalTable($tableGateway);
                        return $table;
                    },
                'PaypalTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Paypal());
                        return new TableGateway('paypal', $dbAdapter, null, $resultSetPrototype);
                    },

            ),
        );
    }

}