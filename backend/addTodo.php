<?php
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
$body = $_POST['body'];
$due = $_POST['due'];
include 'bdConnect.php';
$dbname =  $hostingName."todo";
$conn = new mysqli($servername, $username, $serverpassword, $dbname);
$conn -> set_charset("utf8");
$test = null;


$sql = "INSERT INTO todolist (todoBody,due) VALUES ('$body','$due')";
$conn->query($sql);
$last_id = $conn->insert_id;

$sql = "SELECT todoBody FROM todolist  WHERE due = 'orderMap'";
$result = $conn->query($sql);
$row22 = $result->fetch_assoc();
$row22 = $row22['todoBody'];

$newOrder = $row22.','.$last_id;

$sql = "UPDATE  todolist SET  todoBody = '$newOrder'  WHERE id = 0";
$conn->query($sql);



$sql = "SELECT * FROM todolist  WHERE due = '$due'";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    $test['row'][] = $row;
}
$test['sortMap'] =   explode(",", $newOrder);

echo json_encode($test);
?>