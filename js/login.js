(()=>{
    ajax({
        type:"get",
        url:"header.html",
    }).then(data=>{
        document.querySelector("header").innerHTML=data;
        mouseOver();
    })//引入header
   var uname=document.querySelector("[name=uname]");
   uname.onblur=e=>{
    //    console.log((e.target.value))
    var b=e.target.parentNode.nextElementSibling.firstElementChild
       if(!/^\w{6,8}$/.test(e.target.value)){
           b.innerHTML="用户名请输入6到8位字母或数字！";}
           else{
            b.innerHTML="验证通过！"
           }

   }
    var upwd = document.querySelector("[name=upwd]");
    upwd.onblur = e => {
        //    console.log((e.target.value))
        var b=e.target.parentNode.nextElementSibling.firstElementChild
        if (!/^\w{6,8}$/.test(e.target.value)) {
            b.innerHTML = "密码请输入6到8位字母或数字！";
        }else
            b.innerHTML = "验证通过！"
        
    }
//背景轮播
 var contaiter=document.querySelector(".bgholder");
        var html="",c=1;
        for(var i=0;i<80;i++){
            html+=`<div></div>`;
        }
        contaiter.innerHTML=html;
        var divs=document.querySelectorAll(".bgholder div");
        
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundImage="url(../img/1.jpg)";
            divs[i].style.left=`${(i%10)*128}px`;//有问题
            divs[i].style.top=`${parseInt(i/10)*90}px`;
            divs[i].style.backgroundPosition=` ${-(i % 10) * 128}px
            ${-parseInt(i / 10) * 90}px`;//拼接图片
        }
        function move() {
            function disorder() {
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.top=(Math.random()*360+180).toFixed(0)+"px";
                    divs[i].style.left=(Math.random()*640+320).toFixed(0)+"px";   
                    divs[i].style.opacity=0;             
                }
            }
            setTimeout(disorder,1000);
            setTimeout(()=>{
                    c++;
                    for (let i = 0; i < divs.length; i++) {
                        divs[i].style.backgroundImage = `url(../img/${c}.jpg)`;
                        divs[i].style.left = `${(i % 10) * 128}px`;
                        divs[i].style.top = `${parseInt(i / 10) * 90}px`;
                        divs[i].style.opacity=1;    
                    }},2000)
                    if(c==4)c=0;
        }
   setInterval(move,3000);


//     //背景blocks
//     var html="";
//     for (var i = 0; i <20; i++) {
//         for (var j = 0; j <43; j++) {
//             html+=`<div class="blockNo${i+""+j} blocks"></div>`    
//         }
        
//     }
//     document.querySelector(".bgBlocks").innerHTML+=html;
//    var n=0;
//         function changing() {
//             // console.log(document.querySelector(".blockNo01"))
//             for (var i = 0; i <20; i++) {
//                 // var str=`.blockNo${i+""+(n+i)}`;   
//                 document.querySelector(`.blockNo${i+""+(n+i+1)}`).style.opacity=0.3;
//                 document.querySelector(`.blockNo${i+""+(n+i)}`).style.opacity=0.3;
//                 if(n>1)
//                 document.querySelector(`.blockNo${i+""+(n+i-1)}`).style.opacity=0.2;

//             }
//             n++;
//             console.log(n);
//             if(n==24) n=0;
//         }
       
//        setInterval(changing,1000);
   //有问题无法重复调用

   var btns=document.querySelectorAll(".btn"),
        uname=document.querySelector("[name=uname]"),
        upwd=document.querySelector("[name=upwd]");
   for(var b of btns){
       b.onmousedown=(e=>{
           e.target.style.background="#3F64BF";
       })
       b.onmouseup=(e=>{
           e.target.style.backgroundImage="linear-gradient(to top, #499cdb, #70c7ee)";          
       })
       b.onclick=(e=>{
           if(e.target.innerHTML=="提交"){
            ajax({
                type:"post",
                url:"../data/user/login.php",
                data:`uname=${uname.value}&upwd=${upwd.value}`,
                dataType:"json"
            }).then(data=>{
                //响应登录后状态
               if(data.ok==1){
                   history.go(-1);
               }
               else{

               }
            })
           }
       })
   }

})()