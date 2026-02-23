<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Network\Controller\Network' => 'Network\Controller\networkController',
			'Network\Controller\Api\Network' => 'Network\Controller\api\networkControllerApi',
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
			'api/v1/network' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => 'api/v1/network[/:action][/:param][/:value]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Network\Controller\Api\Network',
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
