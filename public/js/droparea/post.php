<?php

$r = new stdClass();
header('content-type: application/json');
$data = $_POST['thumbnail'];
unset($_POST['thumbnail']);
if($data){

    // Uploading folder
    $folder = 'files/';
    if (!is_dir($folder))
        mkdir($folder);
    // If specifics folder 
    $folder .= $_POST['folder'] ? $_POST['folder'] . '/' : '';
    if (!is_dir($folder))
        mkdir($folder);


    $filename = $_POST['value'] ? $_POST['value'] :
            $folder . sha1(@microtime() . '-' . $_POST['name']) . '.jpg';


    $data = split(',', $data);
    file_put_contents($filename, base64_decode($data[1]));
    
}
die(json_encode(array_merge(array('url' => $filename), $_POST)));

?>