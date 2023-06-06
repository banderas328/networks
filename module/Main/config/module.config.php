<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Main\Controller\Main' => 'Main\Controller\MainController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'main' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/main[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Main\Controller\Main',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'main' => __DIR__ . '/../view',
        ),
    ),
);