<?php

return array(
    'modules' => array(
        'Zend\Paginator',
        'Zend\Log',
        'Zend\Db',
        'Zend\ServiceManager\Di',
        'Zend\Mvc\Plugin\FilePrg',
        'Zend\Mvc\Plugin\FlashMessenger',
        'Zend\Mvc\Plugin\Identity',
        'Zend\Mvc\Plugin\Prg',
        'Zend\Session',
        'Zend\Mvc\Console',
        'Zend\Form',
        'Zend\Hydrator',
        'Zend\InputFilter',
        'Zend\Filter',
        'Zend\I18n',
        'Zend\Cache',
        'Zend\Router',
        'Zend\Validator',
        'Application',
        'Settings',
        'User',
		'Preloader',
		'Friends',
		'Sync',
        'Main',
        'Messages',
        'Chanels',
        'Files',
        'Network',
        'Blog',
        'Notifications',
        'Frames',
        'Tasks',
    ),
    'module_listener_options' => array(
        'module_paths' => array(
            './module',
            './vendor',
        ),
        'config_glob_paths' => array(
            'config/autoload/{,*.}{global,local}.php',
        ),
    ),

);
