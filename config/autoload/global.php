<?php
return array(
   'webhost' => 'http://networks.local/',
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => 'mysql:dbname=networks_08_2022;host=localhost;charset=utf8',
        'params' => array(
            'host' => 'localhost',
            'username' => 'root',
            'password' => 'root',
            'dbname' => 'networks_08_2022'
        )
    ),
    'smtp' => array(
        'yandex' => array(
            'address' => 'smtp.yandex.ru',
            'username' => 'xxxxxxxxxx@yandex.ru',   //yandex login
            'password' => 'XXXXXXXXXXX',            //yandex application password
            'secure' => 'TLS',
            'port' => '587',
            'from_mail' => 'xxxxxxxxx@yandex.ru',   // from email
            'from_name' => 'admin'                  // from name
        )
    )
);
