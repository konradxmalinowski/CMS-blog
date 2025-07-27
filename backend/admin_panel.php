<?php
include 'database.php';

if (!isset($_SESSION['name']) || $_SESSION['role'] !== 'admin') {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Access denied"]);
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