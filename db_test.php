<?php

echo "=== ENV CHECK ===\n";
echo "DB_HOST: " . getenv('DB_HOST') . PHP_EOL;
echo "DB_NAME: " . getenv('DB_NAME') . PHP_EOL;
echo "DB_USER: " . getenv('DB_USER') . PHP_EOL;
echo "DB_PASS: " . (getenv('DB_PASS') ? '***' : null) . PHP_EOL;

echo "\n=== CONFIG FILE CHECK ===\n";

$configFiles = [
    'config/autoload/global.php',
    'config/autoload/global_old.php',
    'config/autoload/local.php',
];

foreach ($configFiles as $file) {
    if (file_exists($file)) {
        echo "FOUND: $file\n";
        $content = file_get_contents($file);

        if (strpos($content, 'localhost') !== false) {
            echo "⚠ WARNING: localhost found in $file\n";
        }

        if (strpos($content, 'mysql:') !== false) {
            preg_match('/mysql:[^\'\"]+/', $content, $m);
            echo "DSN SAMPLE: " . ($m[0] ?? 'not found') . "\n";
        }
    }
}

echo "\n=== DNS TEST ===\n";
echo "Trying to resolve db...\n";
echo gethostbyname('db') . PHP_EOL;

echo "\n=== SOCKET CHECK (PDO test) ===\n";

try {
    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        getenv('DB_HOST') ?: 'db',
        getenv('DB_NAME') ?: 'networks'
    );

    echo "DSN USED: $dsn\n";

    $pdo = new PDO($dsn, getenv('DB_USER') ?: 'networks', getenv('DB_PASS') ?: 'networks');
    echo "PDO CONNECT: SUCCESS\n";

} catch (Throwable $e) {
    echo "PDO CONNECT: FAIL\n";
    echo $e->getMessage() . PHP_EOL;
}

echo "\n=== DONE ===\n";