<?php
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");

$due = $_POST['due'];
include 'bdConnect.php';
$dbname =  $hostingName."todo";
$conn = new mysqli($servername, $username, $serverpassword, $dbname);
$conn -> set_charset("utf8");

$sql = "SELECT todoBody FROM todolist  WHERE due = 'orderMap'";
$result = $conn->query($sql);
$row22 = $result->fetch_assoc();
$row22 = $row22['todoBody'];


$sql = "SELECT * FROM todolist  WHERE due = '$due'";
$result = $conn->query($sql);

$sortingPatern = explode(",", $row22);


while($row = $result->fetch_assoc()) {
    $test['row'][] = $row;
}
$test['sortMap'] = $sortingPatern;
echo json_encode($test);
?>