<?php
include 'database.php';

$query = 'SELECT * FROM `articles`';
$stmt = $conn->prepare($query);
$result = $stmt->execute();

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to get articles"]);
    exit;
}

if ($stmt->rowCount() === 0) {
    http_response_code(500);
    echo json_encode(["error" => "No articles were found"]);
    exit;
}

$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($articles);

?>