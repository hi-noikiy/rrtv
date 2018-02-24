<?php
header("Content-Type:application/json");
require_once("../init.php");
@$uid=$_REQUEST["uid"];
@$pagelast=$_REQUEST["pagelast"];
$sql="SELECT vid,title,vtype,vlength,vlike FROM `rr_like` INNER JOIN rr_video on lvid=vid WHERE luid=$uid limit $pagelast,10";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
