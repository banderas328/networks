<?php
namespace  Messages;
use Messages\Model\Messages;
use Messages\Model\MessagesTable;
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
                'Messages\Model\MessagesTable' =>  function($sm) {
                    $tableGateway = $sm->get('MessagesTableGateway');
                    $table = new MessagesTable($tableGateway);
                    return $table;
                },
                'MessagesTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new Messages());
                    return new TableGateway('messages', $dbAdapter, null, $resultSetPrototype);
                },

            ),
        );
    }
}