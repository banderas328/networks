<?php

return array(
    // This should be an array of module namespaces used in the application.
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
//         'Zend\Mvc\I18n',
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
        //'Paypal',
       // 'Facebook',
       // 'Payment',
        'Tags',
       // 'Market',
        'Form',
        'Notifications',
        'Frames',
        'Tasks',
    ),

    // These are various options for the listeners attached to the ModuleManager
    'module_listener_options' => array(
        // This should be an array of paths in which modules reside.
        // If a string key is provided, the listener will consider that a module
        // namespace, the value of that key the specific path to that module's
        // Module.php class.
        'module_paths' => array(
            './module',
            './vendor',
        ),

        // An array of paths from which to glob configuration userfiles after
        // modules are loaded. These effectively override configuration
        // provided by modules themselves. Paths may use GLOB_BRACE notation.
        'config_glob_paths' => array(
            'config/autoload/{,*.}{global,local}.php',
        ),

        // Whether or not to enable a configuration cache.
        // If enabled, the merged configuration will be cached and used in
        // subsequent requests.
        //'config_cache_enabled' => $booleanValue,

        // The key used to create the configuration cache file name.
        //'config_cache_key' => $stringKey,

        // Whether or not to enable a module class map cache.
        // If enabled, creates a module class map cache which will be used
        // by in future requests, to reduce the autoloading process.
        //'module_map_cache_enabled' => $booleanValue,

        // The key used to create the class map cache file name.
        //'module_map_cache_key' => $stringKey,

        // The path in which to cache merged configuration.
        //'cache_dir' => $stringPath,

        // Whether or not to enable modules dependency checking.
        // Enabled by default, prevents usage of modules that depend on other modules
        // that weren't loaded.
        // 'check_dependencies' => true,
    ),

    // Used to create an own service manager. May contain one or more child arrays.
    //'service_listener_options' => array(
    //     array(
    //         'service_manager' => $stringServiceManagerName,
    //         'config_key'      => $stringConfigKey,
    //         'interface'       => $stringOptionalInterface,
    //         'method'          => $stringRequiredMethodName,
    //     ),
    // )

   // Initial configuration with which to seed the ServiceManager.
   // Should be compatible with Zend\ServiceManager\Config.
);
