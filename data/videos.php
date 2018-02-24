<?php
header("Content-Type:application/json");
require_once("init.php");
@$type=$_REQUEST["type"];
$output=[
    "hot"=>[],
    "content"=>[]
];
$sql="select * from rr_video where vtype=$type order by vlike desc limit 3";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["hot"]=$result;

$sql="select * from rr_video where vtype=$type order by vid desc limit 12";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["content"]=$result;
// var_dump($output);
echo json_encode($output);