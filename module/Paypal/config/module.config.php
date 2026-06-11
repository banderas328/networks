<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Paypal\Controller\Paypal' => 'Paypal\Controller\paypalController',
		),
	),
	'router' => array(
		'routes' => array(
			'paypal' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/paypal[/:action][/:param][/:value]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Paypal\Controller\Paypal',
						'action'     => 'index',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'paypal' => __DIR__ . '/../view',
		),
	),
);
