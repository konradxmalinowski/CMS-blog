<?php

include 'database.php';
session_start();
session_destroy();
unset($conn);
echo json_encode(["success" => true]);
?>