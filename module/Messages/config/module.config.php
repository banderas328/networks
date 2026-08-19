<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Messages\Controller\Messages' => 'Messages\Controller\messagesController',
			'Messages\Controller\MessagesApi' => 'Messages\Controller\messagesApiController',
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
					'route'    => '/api/v1/messages[/:action][/:file_id]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Messages\Controller\MessagesApi',
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
