<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Facebook\Controller\Facebook' => 'Facebook\Controller\facebookController',
		),
	),
	'router' => array(
		'routes' => array(
			'facebook' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/facebook[/:action][/:param][/:value]',
					'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'param'     => '[a-zA-Z0-9]*',
                        'value'     => '[a-zA-Z0-9]*',
					),
					'defaults' => array(
						'controller' => 'Facebook\Controller\Facebook',
						'action'     => 'index',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'facebook' => __DIR__ . '/../view',
		),
	),
);
