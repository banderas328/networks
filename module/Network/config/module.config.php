<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Network\Controller\Network' => 'Network\Controller\networkController',
		),
	),
	'router' => array(
		'routes' => array(
			'network' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/network[/:action][/:param][/:value]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Network\Controller\Network',
						'action'     => 'index',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'network' => __DIR__ . '/../view',
		),
	),
);
