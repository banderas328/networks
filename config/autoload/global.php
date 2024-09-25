<?php
$_SERVER['APPLICATION_ENV'] = "development";
return array(
   'webhost' => 'http://networks.local/',
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => 'mysql:dbname=octopus;host=localhost;charset=utf8',
        'params' => array(
            'host' => 'localhost',
            'username' => 'admin_root',
            'password' => 'password',
            'database' => 'octopus'
        )
    ),
    'smtp' => array(
        'yandex' => array(
            'address' => '',
            'username' => '',   //yandex login
            'password' => '',            //yandex application password
            'secure' => 'TLS',
            'port' => '587',
            'from_mail' => 'osoctopus.email@gmail.com',   // from email
            'from_name' => 'admin'                  // from name
        )
    )
);
