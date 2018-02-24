<?php
header("Content-Type:application/json");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
require_once("../init.php");
$sql="select uid,name,gender from rr_user where uname='$uname' and upwd='$upwd'";
$row=mysqli_fetch_row(mysqli_query($conn,$sql));
if ($row) {
    session_start();
    $_SESSION["uid"]=$row[0];
    echo json_encode(["ok"=>1,"name"=>$row[0],"gender"=>1]);
} else {
    echo json_encode(["ok"=>0]);
}
