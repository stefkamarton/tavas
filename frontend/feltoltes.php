<?php

function Upload($name = "file") {
    $target_dir = "lakes/";
    $target_file = $target_dir . uniqid() . "_" . basename($_FILES[$name]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES[$name]["tmp_name"], $target_file)) {
        return $target_file;
    }
}

function getCoordinates($filename) {
    $command = escapeshellcmd('./detector.py 119 174 117 pond.jpg');
    var_dump($command);
    $output = shell_exec($command);
    var_dump($output);
}

if ($_POST["__method__"] == "ajax") {
    $res = array();
    $res['filename'] = Upload();
    $res['coord']= getCoordinates($res['filename']);
} else {
    die("501 - UNAUTHORIZED");
}
?>