<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Market\Controller\Market' => 'Market\Controller\MarketController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'market' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/market[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Market\Controller\Market',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'market' => __DIR__ . '/../view',
        ),
    ),
);