<?php
return array(
    'webhost' => 'http://networks.local/',
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => 'mysql:dbname=octopus;host=localhost;charset=utf8',
        'params' => array(
            'host' => 'localhost',
            'username' => 'root',
            'password' => '',
            'dbname' => 'networks_08_2022'
        )
    ),
    'smtp' => array(
        'yandex' => array(
            'address' => 'smtp.yandex.ru',
            'username' => 'banderas328@yandex.ru',
            'password' => 'xlzyyyyvyvejcjxc',
            'secure' => 'TLS',
            'port' => '587',
            'from_mail' => 'banderas328@yandex.ru',
            'from_name' => 'octopus admin'
        )
    )
);