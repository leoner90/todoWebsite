<?php
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
$due = $_POST['due'];
$idOfElWhereIputNew = $_POST['idOfElWhereIputNew'];
$curentElId = $_POST['curentElId'];

include 'bdConnect.php';
$dbname =  $hostingName."todo";
$conn = new mysqli($servername, $username, $serverpassword, $dbname);
$conn -> set_charset("utf8");

$sql = "SELECT todoBody FROM todolist  WHERE due = 'orderMap'";
$result = $conn->query($sql);
$row22 = $result->fetch_assoc();
$row22 = $row22['todoBody'];
$NewSortingPatern = array_map('intval', explode(',', $row22));
 
$arrayindexofONewEl = array_search((int) $idOfElWhereIputNew, $NewSortingPatern);
$arrayindexofOldEl = array_search((int) $curentElId, $NewSortingPatern);
 

array_splice($NewSortingPatern,$arrayindexofOldEl , 1);
array_splice($NewSortingPatern,$arrayindexofONewEl , 0, $curentElId);

$NewSortingPatern= implode(",", $NewSortingPatern);
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