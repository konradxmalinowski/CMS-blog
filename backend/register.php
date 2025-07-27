<?php
include 'database.php';
session_start();

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Failed to get data from user"]);
    exit;
}

$email = $data['email'] ?? '';
$name = $data['name'] ?? '';
$password = $data['password'] ?? '';
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

if (empty($email) || empty($password) || empty($name)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Failed to get email or password or name from user"]);
    exit;
}

// check if user exists
$stmt = $conn->prepare("SELECT * from users WHERE email=?");
$success = $stmt->execute([$email]);

if (!$success) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to check if user exists"]);
    exit;
}

if ($stmt->rowCount() !== 0) {
    http_response_code(409);
    echo json_encode(["success" => false, "error" => "User with this email already exists"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$success = $stmt->execute([$name, $email, $passwordHash]);

if (!$success || $stmt->rowCount() === 0) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to add new user"]);
    exit;
} else {
    http_response_code(201);
    echo json_encode(["success" => true]);
}
?>