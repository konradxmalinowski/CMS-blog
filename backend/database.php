<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

$conn = null;

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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