(()=>{
    ajax({
        type:"get",
        url:"../data/videos.php",
        data:location.search.slice(1),
        dataType:"json"
    }).then(data=>{
        var {hot,content}=data;
        var html="";
        var topFloor=document.getElementById("hot");
        var floor=document.getElementsByClassName("Floor")[0];
        for(var p of hot){
            html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"><p>${p.title}</p></div></div>`;
        }
        topFloor.innerHTML=html;
        html="";
        for (var p of content) {
            html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"></div><h1>${p.title}<br><span>${p.vlike}次喜欢</span></h1></div>`;
        }
        console.log(floor);
        floor.innerHTML=html;
        preViewOn();

    })

})();
(()=>{
    ajax({
        type:'get',
        url:'header.html'
    }).then(data=>{
        var header=document.getElementsByTagName("header")[0];
        header.innerHTML=data;
        mouseOver();

    })




})()
