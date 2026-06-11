<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Tasks\Controller\Notifications' => 'Tasks\Controller\TasksController',
           'Tasks\Controller\Boards' => 'Tasks\Controller\BoardsController',
           'Tasks\Controller\Projects' => 'Tasks\Controller\ProjectsController',
           'Tasks\Controller\Api\Notifications' => 'Tasks\Controller\api\TasksControllerApi',
           'Tasks\Controller\Api\Boards' => 'Tasks\Controller\api\BoardsControllerApi',
           'Tasks\Controller\Api\Projects' => 'Tasks\Controller\api\ProjectsControllerApi',
        ),
    ),
    'router' => array(
        'routes' => array(
            'projects' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/projects[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Projects',
                        'action'     => 'index',
                    ),
                ),
            ),
            'api/v1/projects' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => 'api/v1/projects[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Api\Projects',
                        'action'     => 'index',
                    ),
                ),
            ),
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
            'api/v1/boards' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => 'api/v1/boards[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Api\Boards',
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
                        'controller' => 'Tasks\Controller\Notifications',
                        'action'     => 'index',
                    ),
                ),
            ),
            'api/v1/tasks' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => 'api/v1/tasks[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\Api\Notifications',
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
