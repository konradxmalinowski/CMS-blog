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
$password = $data['password'] ?? '';
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Failed to get email or password from user"]);
    exit;
}

$stmt = $conn->prepare("SELECT * from users WHERE email=?");
$success = $stmt->execute([$email]);

if (!$success || $stmt->rowCount() === 0) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "User with this email was not found"]);
    exit;
}

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['role'] = $user['role'];
    $_SESSION['name'] = $user['name'];
    http_response_code(200);
    echo json_encode(["success" => true]);
} else {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
    exit;
}

?>