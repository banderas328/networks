<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Tasks\Controller\Tasks' => 'Tasks\Controller\TasksController',
           'Tasks\Controller\Boards' => 'Tasks\Controller\BoardsController',
           'Tasks\Controller\Projects' => 'Tasks\Controller\ProjectsController',
           'Tasks\Controller\TasksApi' => 'Tasks\Controller\TasksApiController',
           'Tasks\Controller\BoardsApi' => 'Tasks\Controller\BoardsApiController',
           'Tasks\Controller\ProjectsApi' => 'Tasks\Controller\ProjectsApiController',
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
                    'route'    => '/api/v1/projects[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\ProjectsApi',
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
                    'route'    => '/api/v1/boards[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\BoardsApi',
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
            'api/v1/tasks' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/tasks[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tasks\Controller\TasksApi',
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
