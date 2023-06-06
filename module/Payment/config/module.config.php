<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Payment\Controller\Payment' => 'Payment\Controller\paymentController',
		),
	),
	'router' => array(
		'routes' => array(
			'payment' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/payment[/:action][/:param][/:value]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Payment\Controller\Payment',
						'action'     => 'getFinishedPayments',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'payment' => __DIR__ . '/../view',
		),
	),
);
