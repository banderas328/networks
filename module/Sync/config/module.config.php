<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Sync\Controller\Sync' => 'Sync\Controller\syncController',
		),
	),
	'router' => array(
		'routes' => array(
			'sync' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/sync[/:action]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
                    'defaults' => array(
                        'controller' => 'Sync\Controller\Sync',
                        'action'     => 'sync',
                    ),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'messages' => __DIR__ . '/../view',
		),
	),
);
