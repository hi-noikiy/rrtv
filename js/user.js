(()=>{
    function likelist() {
        var html=`<li>

                    <ul class="data">
                        <li>序号</li> 
                        <li>标题</li> 
                        <li>类型</li> 
                        <li>长度</li> 
                        <li>like</li>
                       <li>是否删除</li>                      
                    </ul>
                </li>`;
        ajax({
            type:'get',
            url:'../data/user/likelist.php',
            data:"uid=2&pagelast=0",
            dataType:'json'
        }).then(data=>{

            for (var i=0;i<data.length;i++) {
                p=data[i];
                // var time='';
                // if(p.vlength%60>10){
                //     time+=":"+p.length;
                // }else{
                //     time+=":0"+p.length;
                // }
                html += `<li>

                    <ul class="data">
                        <li>${i+1   }</li> 
                        <li>${p.title}</li> 
                        <li>${p.vtype}</li> 
                        <li>${p.vlength}</li> 
                        <li>${p.vlike}</li>                     
                        <li>
                            <a href="#">删除</a>
                        </li>
                    </ul>
                </li>`;
            }
            var list=document.querySelector(".liked>ul");
            // console.log(list);
            list.innerHTML=html;
        
            var items=document.querySelectorAll(".liked>ul>li");
            var btn=document.querySelector(".show");
           
            var s=0;
            btn.onclick=e=>{
                for(var p of items){
                     console.log(p);
                     let a=0;
                     s+=0.2;
                     a=s;
                    p.className="move";
                    p.style.height="40px";
                    p.style.transitionDelay=a+"s";
                }

            }
    })
    }
    likelist();




})();
(() => {
        ajax({
            type: "get",
            url: "header.html"
        }).then(data => {
            document.querySelector("header").innerHTML = data;
            search();
            mouseOver();
        })


 })();
(()=>{
    ajax({
        type:"get",
        url:"../data/user/user.php",
        dataType:"json"
    }).then(data=>{
        console.log(data);
        var gender=data.gender? "男":"女";
        var html ="";
        html+=`
                <li><span>用户名：</span><span>${data.uname}</span></li>
                <li><span>姓名：</span><span>${data.name}</span></li>
                <li><span>年龄：</span><span>${data.age}</span></li>
                <li><span>性别：</span><span>${gender}</span></li>
            `

        document.querySelector(".info").innerHTML=html;
    })
})()