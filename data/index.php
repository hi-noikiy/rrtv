<?php
header("Content-Type:application/json");
require_once("init.php");
$output=[
    "hot"=>[],
    "sic"=>[],//1
    "fun"=>[],//2
    "show"=>[],//3
    "sports"=>[]//4
];
$sql="select * from rr_video order by vlike desc limit 6";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["hot"]=$result;
$sql="select * from rr_video where vtype=1 order by vid desc limit 4";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["sic"]=$result;
$sql="select * from rr_video where vtype=2 order by vid desc limit 4";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["fun"]=$result;
$sql="select * from rr_video where vtype=3 order by vid desc limit 4";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["show"]=$result;
$sql="select * from rr_video where vtype=4 order by vid desc limit 4";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["sports"]=$result;
echo json_encode($output);


