<?php
$_SERVER['APPLICATION_ENV'] = "development";

return array(
    'webhost' => 'http://localhost:8080/', // порт из docker-compose
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => sprintf(
            'mysql:dbname=%s;host=%s;charset=utf8mb4',
            getenv('DB_NAME') ?: 'networks',
            getenv('DB_HOST') ?: 'db'
        ),
        'params' => array(
            'host'     => getenv('DB_HOST') ?: 'db',       // имя сервиса MariaDB в docker-compose
            'username' => getenv('DB_USER') ?: 'networks',
            'password' => getenv('DB_PASS') ?: 'networks',
            'database' => getenv('DB_NAME') ?: 'networks',
            'port'     => 3306,
            'charset'  => 'utf8mb4'
        )
    ),
    'smtp' => array(
        'yandex' => array(
            'address'   => '',
            'username'  => '',   // Yandex login
            'password'  => '',   // Yandex app password
            'secure'    => 'TLS',
            'port'      => '587',
            'from_mail' => 'osoctopus.email@gmail.com',
            'from_name' => 'admin'
        )
    )
);
