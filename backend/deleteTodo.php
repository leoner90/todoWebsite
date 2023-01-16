<?php
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");

$id = $_POST['id'];
$due = $_POST['due'];

include 'bdConnect.php';
$dbname =  $hostingName."todo";
$conn = new mysqli($servername, $username, $serverpassword, $dbname);
$conn -> set_charset("utf8");
$test = null;
$sql = "DELETE FROM todolist WHERE id = $id";
$result = $conn->query($sql);


$sql = "SELECT todoBody FROM todolist  WHERE due = 'orderMap'";
$result = $conn->query($sql);
$row22 = $result->fetch_assoc();
$row22 = $row22['todoBody'];
$oldSortingPatern = array_map('intval', explode(',', $row22));
$arrayindexofONewEl = array_search((int) $id, $oldSortingPatern);


array_splice($oldSortingPatern,$arrayindexofONewEl , 1);
$NewSortingPatern= implode(",", $oldSortingPatern);
$sql = "UPDATE  todolist SET  todoBody = '$NewSortingPatern'  WHERE id = 0";
$conn->query($sql);

$sql = "SELECT * FROM todolist  WHERE due = '$due'";
$result = $conn->query($sql);


while($row = $result->fetch_assoc()) {
    $test['row'][] = $row;
}
$test['sortMap'] =   explode(",", $NewSortingPatern);

echo json_encode($test);

?>