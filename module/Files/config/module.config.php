<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Files\Controller\Files' => 'Files\Controller\filesController',
			'Files\Controller\Api\Files' => 'Files\Controller\api\filesControllerApi',
		),
	),
	'router' => array(
		'routes' => array(
			'api/v1/files' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => 'api/v1/files[/:action][/:param][/:value]',
					'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'param'     => '[a-zA-Z0-9]*',
                        'value'     => '[a-zA-Z0-9]*',
					),
					'defaults' => array(
						'controller' => 'Files\Controller\Api\Files',
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
