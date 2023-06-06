<?php
namespace  Friends;
use Friends\Model\Friends;
use Friends\Model\FriendsTable;
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
				'Friends\Model\FriendsTable' =>  function($sm) {
						$tableGateway = $sm->get('FriendsTableGateway');
						$table = new FriendsTable($tableGateway);
						return $table;
					},
				'FriendsTableGateway' => function ($sm) {
						$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
						$resultSetPrototype = new ResultSet();
						$resultSetPrototype->setArrayObjectPrototype(new Friends());
						return new TableGateway('friends', $dbAdapter, null, $resultSetPrototype);
					},

			),
		);
	}

}