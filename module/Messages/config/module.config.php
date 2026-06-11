<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Messages\Controller\Messages' => 'Messages\Controller\messagesController',
			'Messages\Controller\Api\Messages' => 'Messages\Controller\api\messagesControllerApi',
		),
	),
	'router' => array(
		'routes' => array(
			'messages' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/messages[/:action][/:file_id]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Messages\Controller\Messages',
						'action'     => 'addmessageform',
					),
				),

			),
			'api/v1/messages' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => 'api/v1/messages[/:action][/:file_id]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Messages\Controller\Api\Messages',
						'action'     => 'addmessageform',
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
