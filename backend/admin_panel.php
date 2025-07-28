<?php
include 'database.php';
session_start();

if (!isset($_SESSION['name'])) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Access denied"]);
    exit;
}

if ($_SESSION['role'] !== 'admin') {
    http_response_code(200);
    echo json_encode(["success" => false, "message" => "User: " . $_SESSION['name'] . " doesn't have access to admin tools"]);
    exit;
}


$stmt = $conn->prepare('SELECT id, name, email, role FROM users');
$success = $stmt->execute();

if (!$success || $stmt->rowCount() === 0) {
    http_response_code(500);
    echo json_encode(['success' => false, "message" => "Users were not found"]);
    exit;
}

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode(["success" => true, "users" => $users]);

?>