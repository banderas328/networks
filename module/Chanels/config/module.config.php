<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Chanels\Controller\Chanels' => 'Chanels\Controller\ChanelsController',
           'Chanels\Controller\ChanelsApi' => 'Chanels\Controller\ChanelsApiController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'chanels' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/chanels[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Chanels\Controller\Chanels',
                        'action'     => 'indexPublic',
                    ),
                ),
            ),

            'api/v1/chanels' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/chanels[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Chanels\Controller\ChanelsApi',
                        'action'     => 'indexPublic',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'chanels' => __DIR__ . '/../view',
        ),
    ),
);