<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Tags\Controller\Tags' => 'Tags\Controller\TagsController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'tags' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/tags[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Tags\Controller\Tags',
                        'action'     => 'tagcloud',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'tags' => __DIR__ . '/../view',
        ),
    ),
);