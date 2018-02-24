
(()=>{
	function blocksMoving() {
		var arr=[];
		var str="";
		for (var i = 0; i <420; i++) {//数量应根据宽度取值
			str+=`<div class="innerBlock"></div>`;
		}
		document.getElementById("blocks").innerHTML=str;
		
		}

	function change() {
		var arr=document.getElementsByClassName('innerBlock');
		for (var i = 0; i <420; i++) {
				if (Math.random()<0.1) {
					arr[i].style.opacity=0.2;
				}else if (Math.random()<0.16) {
					arr[i].style.opacity=0.3;
				}else{
					arr[i].style.opacity=0.4;
				}	
		}
	}
blocksMoving();	
change();
setInterval(change,1000);
}
)();
(()=>{
	ajax({
		type:"get",
		url:"header.html"
	}).then(data=>{
		document.querySelector("header").innerHTML=data;
		search();
		mouseOver();
	})


})();
(()=>{
ajax({
	type:"get",
	url:"../data/index.php",
	dataType:"json"
}).then(data=>{
	console.log(data);

	items = document.getElementById("hot");
	var html = "";
	for (var p of data.hot) {
		html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a><p>${p.title}</p></div><img src="../img/preview/${p.preview.trim()}"><p>${p.title}</p></div></div>`;
	}
	items.innerHTML = html;

	var items=document.getElementById("sic");
	var html="";
	for(var p of data.sic){
		html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"></div><h1>${p.title}<br><span>${p.vlike}次喜欢</span></h1></div>`;
	}
	items.innerHTML=html;

	items = document.getElementById("fun");
	var html = "";
	for (var p of data.fun) {
		html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"></div><h1>${p.title}<br><span>${p.vlike}次喜欢</span></h1></div>`;
	}
	items.innerHTML = html;

	items = document.getElementById("show");
	var html = "";
	for (var p of data.show) {
		html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"></div><h1>${p.title}<br><span>${p.vlike}次喜欢</span></h1></div>`;
		
	}
	items.innerHTML = html;

	items = document.getElementById("sports");
	var html = "";
	for (var p of data.sports) {
		html += `<div class="holder"><div class="preView"><div><a href="${p.href}"></a></div><img src="../img/preview/${p.preview.trim()}"></div><h1>${p.title}<br><span>${p.vlike}次喜欢</span></h1></div>`;
	
	}
	items.innerHTML = html;

	preViewOn();

})



})()