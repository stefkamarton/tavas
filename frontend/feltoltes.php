<?php

function Upload($name = "file") {
    $target_dir = "lakes/";
    $target_file = $target_dir . uniqid() . "_" . basename($_FILES[$name]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES[$name]["tmp_name"], $target_file)) {
        return $target_file;
    }
}

function getCoordinates($filename, $colors) {
    $command = escapeshellcmd('./detector.py ' . $colors["blue"] . ' ' . $colors["green"] . ' ' . $colors["red"] . ' ' . $filename);
    $output = shell_exec($command);
    return $output;
}

if ($_POST["__method__"] == "upload") {
    $res = array();
    $res['filename'] = Upload();
    $res['coord'] = getCoordinates($res['filename'], array("red" => $_POST["red"], "blue" => $_POST["blue"], "green" => $_POST["green"]));
    echo json_encode($res);
} else if ($_POST["__method__"] == "save") {
    $servername = "localhost";
    $username = "c0_tavas";
    $password = "Yy5cjABWz7_i";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=c0_tavas", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("INSERT INTO lakes (name, date,svg_coord,picture,red,green,blue,altitude,sensor_width,focus_length,depth) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param($_POST['name'], date("Y-m-d H:i:s"), $_POST["svg_coord"], $_POST["file"],$_POST["red"],$_POST["green"], $_POST["blue"],$_POST["altitude"],$_POST["sensor_width"],
                $_POST["focus_length"],$_POST["depth"]);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
} else {
    die("501 - UNAUTHORIZED");
}
?>