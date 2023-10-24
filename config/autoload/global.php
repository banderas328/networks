<?php
$_SERVER['APPLICATION_ENV'] = "development";
return array(
   'webhost' => 'http://networks.local/',
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => 'mysql:dbname=octopus;host=localhost;charset=utf8',
        'params' => array(
            'host' => 'localhost',
            'username' => 'root',
            'password' => '',
            'dbname' => 'octopus'
        )
    ),
    'smtp' => array(
        'yandex' => array(
            'address' => 'smtp.gmail.com',
            'username' => 'anton.zhavrid.minsk@gmail.com',   //yandex login
            'password' => 'WmmKOnDmZhHA',            //yandex application password
            'secure' => 'TLS',
            'port' => '587',
            'from_mail' => 'anton.zhavrid.minsk@gmail.com',   // from email
            'from_name' => 'admin'                  // from name
        )
    )
);
