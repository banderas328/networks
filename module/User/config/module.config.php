<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'User\Controller\User' => 'User\Controller\UserController',
            'User\Controller\UserApi' => 'User\Controller\UserApiController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'user' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/user[/:action][/:key1][/:value1][/:key2][/:value2]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action'     => 'login',
                    ),
                ),

            ),
            'api/user' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/user[/:action][/:key1][/:value1][/:key2][/:value2]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\UserApi',
                        'action'     => 'login',
                    ),
                ),

            ),

            'usersearch' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/user/usersearch',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action'     => 'usersearch',
                    ),
                ),

            ),
            'api/usersearch' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1//user/usersearch',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\UserApi',
                        'action'     => 'usersearch',
                    ),
                ),

            ),
            'logout' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/user/logout',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action'     => 'logout',
                    ),
                ),

            ),
            'api/logout' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/user/logout',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\UserApi',
                        'action'     => 'logout',
                    ),
                ),

            ),
            'restore' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/user/restore',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action'     => 'restore',
                    ),
                ),

            ),
           'api/restore' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/user/restore',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\UserApi',
                        'action'     => 'restore',
                    ),
                ),

            ),
            'reset' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/user/reset[/:key1][/:value1]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                        'action'     => 'reset',
                    ),
                ),

            ),
            'api/reset' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/api/v1/user/reset[/:key1][/:value1]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\UserApi',
                        'action'     => 'reset',
                    ),
                ),

            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'user' => __DIR__ . '/../view',
        ),
    ),
);
