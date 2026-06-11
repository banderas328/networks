<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "\n===== ENV =====\n";

echo "getcwd():\n";
var_dump(getcwd());

echo "\nDOCUMENT_ROOT:\n";
var_dump($_SERVER['DOCUMENT_ROOT'] ?? null);

echo "\n===== PATHS =====\n";

$userId = 1;

$path = "userfiles/" . $userId;
$fileName = uniqid();

$file = $path . '/' . $userId . $fileName . 'test.html';

$fullPath = getcwd() . "/public/" . $file;

echo "\nTarget file:\n";
var_dump($fullPath);

echo "\nTarget dir:\n";
var_dump(dirname($fullPath));

echo "\n===== DIRECTORY CHECK =====\n";

echo "Directory exists:\n";
var_dump(is_dir(dirname($fullPath)));

echo "Directory writable:\n";
var_dump(is_writable(dirname($fullPath)));

if (is_dir(dirname($fullPath))) {

    echo "\nDirectory owner info:\n";

    clearstatcache();

    $stat = stat(dirname($fullPath));

    print_r($stat);
}

echo "\n===== WRITE TEST =====\n";

$result = @file_put_contents(
    $fullPath,
    "Docker test " . date('Y-m-d H:i:s')
);

echo "file_put_contents result:\n";
var_dump($result);

echo "\nLast error:\n";
var_dump(error_get_last());

echo "\nFile exists after write:\n";
var_dump(file_exists($fullPath));

if (file_exists($fullPath)) {

    echo "\nFile content:\n";
    var_dump(file_get_contents($fullPath));
}

echo "\n===== USER =====\n";

echo shell_exec('id 2>&1');

echo "\n===== LS PUBLIC =====\n";

echo shell_exec('ls -lah public 2>&1');

echo "\n===== LS USERFILES =====\n";

echo shell_exec('ls -lah public/userfiles 2>&1');

echo "\n===== FIND USER DIRS =====\n";

echo shell_exec('find public/userfiles -maxdepth 2 -type d 2>&1');

echo "\n===== END =====\n";