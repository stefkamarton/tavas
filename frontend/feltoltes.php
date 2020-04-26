<?php

function Upload($name = "file") {
    $target_dir = "lakes/";
    $target_file = $target_dir .uniqid()."_". basename($_FILES[$name]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES[$name]["tmp_name"], $target_file)) {
        echo "asd";
        return $target_file;
    }
}
var_dump($_FILES);

if ($_POST["__method__"] == "ajax") {
    $res=Upload();
    var_dump($res);
} else {
    die("501 - UNAUTHORIZED");
}
?>