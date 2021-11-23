<?php 
return array(
    'webhost'  => 'http://networks.local/',
    'database' => array(
        'driver' => 'Pdo',
        'dsn'    => 'mysql:dbname=networks2;host=localhost;charset=utf8',
        'params'  => array(
            'host'     => 'localhost',
            'username' => 'root',
            'password' => 'root',
            'dbname'   => 'networks'
        )
    )
);