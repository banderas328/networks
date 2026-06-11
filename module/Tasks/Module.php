<?php
namespace Tasks;
use Tasks\Model\Tasks;
use Tasks\Model\TasksTable;
use Boards\Model\Boards;
use Boards\Model\BoardsTable;
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
                'Tasks\Model\TasksTable' =>  function($sm) {
                        $tableGateway = $sm->get('TasksTableGateway');
                        $table = new TasksTable($tableGateway);
                        return $table;
                    },
                'TasksTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Blog());
                        return new TableGateway('tasks', $dbAdapter, null, $resultSetPrototype);
                    },
                'Boards\Model\BoardsTable' =>  function($sm) {
                    $tableGateway = $sm->get('BoardsTableGateway');
                    $table = new BoardsTable($tableGateway);
                    return $table;
                    },
                'BoardsTableGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    $resultSetPrototype->setArrayObjectPrototype(new Blog());
                    return new BoardsGateway('boards', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }

}