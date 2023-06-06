<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Notifications\Controller\Notifications' => 'Notifications\Controller\NotificationsController'
        ),
    ),
    'router' => array(
        'routes' => array(
            'notifications' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/notifications[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Notifications\Controller\Notifications',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'tasks' => __DIR__ . '/../view',
            'boards' => __DIR__ . '/../view',
        ),
    ),
);