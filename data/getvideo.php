<?php
    header("Content-Type:application/json;charset=utf-8");
    require("init.php");
    $vid=$_REQUEST["vid"];
    $output=[];
    $sql="select vid,title,vtype,vlength,vlike,vintroduce from rr_video where vid=$vid";
    $videoinfo=mysqli_fetch_assoc(mysqli_query($conn,$sql));
    $sql="select c.cid,c.pushid,c.content,u.name from rr_comment c,rr_user u where c.pushid=u.uid and onvid=$vid order by pushtime desc limit 0 ,5";
   
    $comments=mysqli_fetch_all(mysqli_query($conn,$sql),1);
    
    $output=[
        "videoinfo"=>$videoinfo,
        "comments"=>$comments
    ];
    // var_dump($output);
    $sql="select * from rr_video order by vlike desc limit 5";
$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$output["hot"]=$result;
    echo json_encode($output);