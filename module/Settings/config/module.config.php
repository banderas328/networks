<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Settings\Controller\Settings' => 'Settings\Controller\SettingsController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'settings' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/settings[/:action][/:key1][/:value1][/:key2][/:value2]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Settings\Controller\Settings',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'settings' => __DIR__ . '/../view',
        ),
    ),
);