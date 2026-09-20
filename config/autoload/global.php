<?php
$_SERVER['APPLICATION_ENV'] = "development";

return array(
    'webhost' => 'http://localhost:8080/', 
    'database' => array(
        'driver' => 'Pdo',
        'dsn' => sprintf(
            'mysql:dbname=%s;host=%s;charset=utf8mb4',
            getenv('DB_NAME') ?: 'networks',
            getenv('DB_HOST') ?: 'db'
        ),
        'params' => array(
            'host'     => getenv('DB_HOST') ?: 'db',       
            'username' => getenv('DB_USER') ?: 'networks',
            'password' => getenv('DB_PASS') ?: 'networks',
            'database' => getenv('DB_NAME') ?: 'networks',
            'port'     => 3306,
            'charset'  => 'utf8mb4'
        )
    ),
);
