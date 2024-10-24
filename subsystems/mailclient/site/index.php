<?php

/**
 * GIT VERSION: 10813
 *
 * Some of the following constants are automatically filled in when
 * the build process is run. If you change them in site/index.php
 * and rerun the build process your changes will be lost
 *
 * APP_PATH   absolute path to the php files of the app
 * DEBUG_MODE flag to enable easier debugging and development
 * CACHE_ID   unique string to bust js/css browser caching for a new build
 * SITE_ID    random site id used for page keys
 */
define('APP_PATH', '/var/www/html/cypht/');
define('VENDOR_PATH', APP_PATH.'vendor/');
define('CONFIG_PATH', APP_PATH.'config/');
define('WEB_ROOT', '');
define('ASSETS_THEMES_ROOT', '');
define('DEBUG_MODE', false);
define('CACHE_ID', 'vrbSrGv2B%2BWGbfz25YG%2Bgz5LWfUQIviaV1t7k0nyL88%3D');
define('SITE_ID', 'zRULT9r44ahRAWEUyxDH0SBXO1GBUMrPyq4bYUOU7gtmC4BG2wqGSW%2Fkqv%2BN7pGUqdXJ55PPgj%2FRFjjO2HS5UQ%3D%3D');
define('JS_HASH', 'sha512-k2iiXBAMRyzjTPS9tZ2XILnA7Nw80g+SGMj5nX8GKjcXJYn1q/dK70iY3DNCGK0vwp2WmfLkTPTLXgsK42tlKQ==');
define('CSS_HASH', 'sha512-Oj0hdvV6EFwv8EPY0Uhut24GmQEMdb3wiUmI5WIc7wcZwOU7RRmct8V3icwiBOHc50zGLhQEF1KNfw1ns5SE5Q==');

/* show all warnings in debug mode */
if (DEBUG_MODE) {
    error_reporting(E_ALL);
}

/* don't let anything output content until we are ready */
ob_start();

require VENDOR_PATH.'autoload.php';
/* get includes */
require APP_PATH.'lib/framework.php';
$environment = Hm_Environment::getInstance();
$environment->load();

/* get configuration */
$config = new Hm_Site_Config_File();
/* set default TZ */
date_default_timezone_set($config->get('default_setting_timezone', 'UTC'));
/* set the default since and per_source values */
$environment->define_default_constants($config);

/* setup ini settings */
if (!$config->get('disable_ini_settings')) {
    require APP_PATH.'lib/ini_set.php';
}

/* process the request */
new Hm_Dispatch($config);

/* log some debug stats about the page */
if (DEBUG_MODE) {
    Hm_Debug::load_page_stats();
    Hm_Debug::show();
}
