<?php
return array(
    'controllers' => array(
        'invokables' => array(
           'Form\Controller\Form' => 'Form\Controller\FormController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'form' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/form[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Form\Controller\Form',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'form' => __DIR__ . '/../view',
        ),
    ),
);