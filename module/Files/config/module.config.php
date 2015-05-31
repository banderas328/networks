<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Files\Controller\Files' => 'Files\Controller\filesController',
		),
	),
	'router' => array(
		'routes' => array(
			'files' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/files[/:action][/:param][/:value]',
					'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'param'     => '[a-zA-Z0-9]*',
                        'value'     => '[a-zA-Z0-9]*',
					),
					'defaults' => array(
						'controller' => 'Files\Controller\Files',
						'action'     => 'uploadfile',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'userfiles' => __DIR__ . '/../view',
		),
	),
);
