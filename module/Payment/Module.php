<?php
namespace  Payment;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Payment\Model\Payment;
use Payment\Model\PaymentTable;
use Payment\Model\Wallet;
use Payment\Model\WalletTable;

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
            'factories' => [
                'Payment\Model\PaypalTable' =>  function($sm) {
                        $tableGateway = $sm->get('PaymentTableGateway');
                        $table = new PaymentTable($tableGateway);
                        return $table;
                    },
                'PaymentTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Payment());
                        return new TableGateway('payment', $dbAdapter, null, $resultSetPrototype);
                    },
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
                'Payment\Model\WalletTable' =>  function($sm) {
                    $tableGateway = $sm->get('WalletTableGateway');
                    $table = new WalletTable($tableGateway);
                    return $table;
                },
                'WalletTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new Wallet());
                    return new TableGateway('wallet', $dbAdapter, null, $resultSetPrototype);
                },

            ],
        );
    }

}