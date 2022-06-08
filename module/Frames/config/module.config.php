<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Frames\Controller\Frames' => 'Frames\Controller\framesController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'frames' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/frames[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Frames\Controller\Frames',
                        'action'     => 'index',
                    ),
                ),
            ),
       ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'frames' => __DIR__ . '/../view',
        ),
    ),
);
