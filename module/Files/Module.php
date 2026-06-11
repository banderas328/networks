<?php
namespace  Files;
use Files\Model\Files;
use Files\Model\FilesTable;
use Files\Model\FileSystem;
use Files\Model\FileSystemTable;
use Files\Model\PayedFiles;
use Files\Model\PayedFilesTable;
use Files\Model\FilesToTags;
use Files\Model\FilesToTagsTable;
use Network\Model\Network;
use Network\Model\NetworkTable;
use Tags\Model\Tags;
use Tags\Model\TagsTable;
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
                'Files\Model\PayedFilesTable' =>  function($sm) {
                    $tableGateway = $sm->get('PayedFilesTableGateway');
                    $table = new PayedFilesTable($tableGateway);
                    return $table;
                },
                'PayedFilesTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new PayedFiles());
                    return new TableGateway('payed_files', $dbAdapter, null, $resultSetPrototype);
                },
                'Files\Model\FilesToTagsTable' =>  function($sm) {
                    $tableGateway = $sm->get('FilesToTagsTableGateway');
                    $table = new FilesToTagsTable($tableGateway);
                    return $table;
                },
                'FilesToTagsTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new FilesToTags());
                    return new TableGateway('files_to_tags', $dbAdapter, null, $resultSetPrototype);
                },
                'Tags\Model\TagsTable' =>  function($sm) {
                    $tableGateway = $sm->get('TagsTableGateway');
                    $table = new TagsTable($tableGateway);
                    return $table;
                },
                'TagsTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new Tags());
                    return new TableGateway('tags', $dbAdapter, null, $resultSetPrototype);
                },


            ),
		);
	}

}