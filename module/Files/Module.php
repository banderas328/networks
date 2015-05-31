<?php
namespace  Files;
use Files\Model\Files;
use Files\Model\FilesTable;
use Files\Model\FileSystem;
use Files\Model\FileSystemTable;
use Network\Model\Network;
use Network\Model\NetworkTable;
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
				'Files\Model\FilesTable' =>  function($sm) {
						$tableGateway = $sm->get('FilesTableGateway');
						$table = new FilesTable($tableGateway);
						return $table;
					},
				'FilesTableGateway' => function ($sm) {
						$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
						$resultSetPrototype = new ResultSet();
						$resultSetPrototype->setArrayObjectPrototype(new Files());
						return new TableGateway('files', $dbAdapter, null, $resultSetPrototype);
					},
                'Files\Model\FileSystemTable' =>  function($sm) {
                    $tableGateway = $sm->get('FileSystemTableGateway');
                    $table = new FileSystemTable($tableGateway);
                    return $table;
                },
                'FileSystemTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new FileSystem());
                    return new TableGateway('users_filesystem', $dbAdapter, null, $resultSetPrototype);
                },
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