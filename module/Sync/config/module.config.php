<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Sync\Controller\Sync' => 'Sync\Controller\syncController',
			'Sync\Controller\SyncApi' => 'Sync\Controller\syncApiController',
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
			'api/sync' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/api/v1/sync[/:action]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
                    'defaults' => array(
                        'controller' => 'Sync\Controller\SyncApi',
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
