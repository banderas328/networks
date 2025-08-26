<?php
namespace Market;
use Market\Model\Market;
use Market\Model\MarketTable;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Files\Model\FilesToTags;
use Files\Model\FilesToTagsTable;


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
                'Market\Model\MarketTable' =>  function($sm) {
                        $tableGateway = $sm->get('MarketTableGateway');
                        $table = new MarketTable($tableGateway);
                        return $table;
                    },
                'MarketTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                        $resultSetPrototype = new ResultSet();
                        $resultSetPrototype->setArrayObjectPrototype(new Market());
                        return new TableGateway('market_files', $dbAdapter, null, $resultSetPrototype);
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
            ),
        );
    }

}