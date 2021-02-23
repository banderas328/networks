<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Tasks\Controller\Tasks' => 'Tasks\Controller\TasksController',
           'Tasks\Controller\Boards' => 'Tasks\Controller\BoardsController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'boards' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/boards[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Boards',
                        'action'     => 'index',
                    ),
                ),
            ),
            
            'tasks' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/tasks[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Tasks',
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