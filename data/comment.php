<?php
header("Content-Type:application/json");
session_start();
require("init.php");
$uid=$_SESSION["uid"];
$vid=$_REQUEST["vid"];
$content=$_REQUEST["content"];
$time=$_REQUEST["time"];
$sql="INSERT INTO rr_comment VALUES (null,$uid,$vid,'$content',$time)";

$result=mysqli_query($conn,$sql);
if ($result) {
    echo '{"ok":1}';
} else {
    echo '{"ok":-1}';

}
