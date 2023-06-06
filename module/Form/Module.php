<?php
namespace Form;
use Form\Model\Form;
use Form\Model\FormTable;
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
                'Form\Model\FormTable' =>  function($sm) {
                        $tableGateway = $sm->get('FormTableGateway');
                        $table = new FormTable($tableGateway);
                        return $table;
                    },
                'FormTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Form());
                        return new TableGateway('forms', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }

}