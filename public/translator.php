<?php 

use Laminas\I18n\Translator\Translator;

die("hello");
return Translator::factory([
    'translation_file_patterns' => [
        [
            'type'     => 'gettext',
            'base_dir' => __DIR__ . '/../languages',
            'pattern'  => 'lang.array.%s.php',
        ],
    ],
]);
        



?>