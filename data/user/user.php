<?php
header("Content-type:application/json");
session_start();
$uid=$_SESSION["uid"];
require("../init.php");
$sql="SELECT uname,name,age,gender FROM rr_user where uid=$uid";
$rows=mysqli_fetch_all(mysqli_query($conn,$sql),1);
echo json_encode($rows[0]);
