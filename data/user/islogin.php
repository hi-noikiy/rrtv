<?php
header("Content-Type:application/json");
session_start();
require("../init.php");
@$uid=$_SESSION["uid"];
$sql="select uid,name,gender from rr_user where uid='$uid'";
$row=mysqli_fetch_row(mysqli_query($conn,$sql));
if ($row) {
    echo json_encode(["ok"=>1,"uid"=>$row[0],"name"=>$row[1],"gender"=>$row[2]]);
} else {    
    echo json_encode(["ok"=>0]);
}
