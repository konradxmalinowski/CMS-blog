<?php
include 'database.php';
session_start();

if (isset($_SESSION['name'])) {
    echo json_encode(["success" => true, "name" => $_SESSION['name']]);
} else {
    echo json_encode(["success" => false]);
}

?>