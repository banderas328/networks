<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Blog\Controller\Blog' => 'Blog\Controller\BlogController',
           'Blog\Controller\Api\Blog' => 'Blog\Controller\api\BlogControllerApi',
        ),
    ),
    'router' => array(
        'routes' => array(
            'blog' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/blog[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Blog\Controller\Blog',
                        'action'     => ' blogform',
                    ),
                ),
            ),
            'api/v1/blog' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => 'api/v1/blog[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Blog\Controller\Api\Blog',
                        'action'     => ' blogform',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'blog' => __DIR__ . '/../view',
        ),
    ),
);