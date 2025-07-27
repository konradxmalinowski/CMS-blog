<?php
include 'database.php';
session_start();

if (isset($user['name'])) {
    echo json_encode(["success" => true, "name" => $_SESSION['name']]);
} else {
    echo json_encode(["success" => false]);
}

?>