<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'Friends\Controller\Friends' => 'Friends\Controller\friendsController',
			'Friends\Controller\Api\Friends' => 'Friends\Controller\api\friendsControllerApi',
		),
	),
	'router' => array(
		'routes' => array(
			'friends' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => '/friends[/:action][/:user_id]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Friends\Controller\Friends',
						'action'     => 'addfriendrequest',
					),
				),

			),
			'api/v1/friends' => array(
				'type'    => 'segment',
				'options' => array(
					'route'    => 'api/v1/friends[/:action][/:user_id]',
					'constraints' => array(
						'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
						'id'     => '[0-9]+',
					),
					'defaults' => array(
						'controller' => 'Friends\Controller\Api\Friends',
						'action'     => 'addfriendrequest',
					),
				),

			),
		),
	),

	'view_manager' => array(
		'template_path_stack' => array(
			'friends' => __DIR__ . '/../view',
		),
	),
);
