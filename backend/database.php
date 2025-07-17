<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");

$conn = null;

try {
    $conn = new PDO('mysql:host=localhost;dbname=blog', 'root', '');
    if (!$conn) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to connect to database"]);
        exit;
    }
} catch (error $e) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to connect to database, " . $e]);
    exit;
}

?>