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
function loadComment() {
	
	ajax({
		type:"get",
		url:"../data/getvideo.php",
		data:location.search.slice(1),
		dataType:"json"
	}).then(data=>{
		var html="";
		console.log(data);
		var video=document.querySelector(".playarea video");
		var playlist=document.querySelector(".playlist ul");
		for(var p of data.hot){
			var a=""
			if (p.title.trim().length>6) {a=p.title.trim().slice(0,6)+"..."}
			else a=p.title.trim().slice(0,6);
			html+=`         <li><img src="../img/preview/${p.preview.trim()}" data-href=${p.href} ><span>${a}</span></li>`
		}
		playlist.innerHTML=html;
		var vinfo=document.querySelector(".video-info");
		var type="";
		 switch (data.videoinfo.vtype.trim()*1){
						case 1:type="科技";
						break;
						case 2:type="搞笑";
						break;
						case 3:type="综艺";
						break;
						case 4:type="运动";
						break;}
						
		var t=data.videoinfo.vlength*1;
		length=parseInt(t%3600/60)+":"+t%60;
		if(t>3600){
			t=(t/3600).toFixed(0);
			length=t+":"+length;
		}
		console.log(t,length);
		html=`<h1>${data.videoinfo.title}</h1>
                <ul class="infos">
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-like1-copy"></use>
                        </svg>
                    </li>
                    <li>${type}</li>
                    <li>${length}</li>
                </ul>
                <p>${data.videoinfo.vintroduce}</p>`;
		vinfo.innerHTML=html;
		html="";
		var comments=document.querySelector(".show-comment");
		for(var p of data.comments){
			html+=`<li>
				<h3>>${p.name}</h3>
                        <p>${p.content}</p>
						</li>`
		}
		comments.innerHTML=html;
		if(data.comments.length==0){
			 comments.innerHTML=` <div class="no-comment">
            <h1>还没有评论快抢沙发!</h1>
        </div>`;
		}
	})

};
loadComment();
(()=>{
	var line=document.querySelector("#line");
	var svg=document.querySelector("svg");
	var circle=document.querySelector("#c");
	var canMove=false;
	var cMove=false;
	var time=document.getElementById("time");
	var pp=document.getElementById("pp");
	var cap=document.getElementById("cap");
	var progress=document.getElementById("progress");

	var video=document.querySelector("video");
	console.dir(video);




	function count() {
		var t=time.innerHTML.split(":");
		t[0]=parseInt(t[0]);
		t[1]=parseInt(t[1]);
		t[1]++;
		if(t[1]==60){
			t[0]++;
			t[1]=0;
		}
		console.log(video.currentTime)

		h=t[0]<10?"0"+t[0]:t[0];
		s=t[1]<10?"0"+t[1]:t[1];
		time.innerHTML=h+":"+s;
	}
	// var timer=setInterval(count,1000);
	var timer;
	svg.onclick=e=>{
		var x=e.offsetX,y=e.offsetY;
		if (x>50&&x<100&&y>25&&y<75) {

			if (pp.getAttribute("xlink:href")=="#icon-bofang1") {
				video.pause();

				pp.setAttribute("xlink:href","#icon-bofang");
				clearInterval(timer);
				console.log(timer);
			} else {
				video.play();
				timer=setInterval(count,1000);
				pp.setAttribute("xlink:href","#icon-bofang1")
			}
		}
	}
	circle.onmousedown=e=>{
		console.log(e.target.cx);
		canMove=true;
	}

	svg.onmouseup=e=>{
		canMove=false;
	}




	cap.onmousedown=e=>{
		cMove=true;
	}
	svg.onmousemove=e=>{
		if(cMove){
			var x1=e.offsetX;

			cap.setAttribute("x2",x1);
			cap.setAttribute("x1",x1-10);
			progress.setAttribute("x2",x1);
		}
		if(canMove){
			var x=e.offsetX;
			x<600&&(x=600);
			x>900&&(x=900);
			circle.setAttribute("cx",x);
			line.setAttribute("x2",x);
			var v=((x-600)/300);
			video.volume=v;
			console.log(video.volume,v)
		}

	}
	svg.onmouseup=e=>{
		cMove=false;
		canMove=false;
	}
})();
(()=>{
	var playarea=document.querySelector(".playarea");
	playarea.onmouseenter=e=>{
		document.querySelector(".controls").style.display="block";
	}
	playarea.onmouseleave=e=>{
		document.querySelector(".controls").style.display="none";
	}
})();
(()=>{
	var video=document.querySelector("video");

})();
(()=>{//添加评论
	var btn=document.querySelector(".comment .btn");
	btn.onmousedown=e=>{
		e.target.style.background ="#4488d1";
	}
	btn.onmouseup = e => {
		e.target.style.background = "#46aedb";
	}
	btn.onclick=e=>{
		var uid=document.querySelector(".container .cover").dataset.uid,
			vid=location.search.split("=")[1];
		var time=new Date().getTime();
		var content=document.querySelector(".content").value;
		if(content && uid){


			ajax({
				type:"get",
				url:"../data/comment.php",
				data:`uid=${uid}&vid=${vid}&content=${content}&time=${time}`,
				dataType:"json"
			}).then(data=>{
				console.log(data);
				document.querySelector(".content").value="";
				loadComment();
			})
		}
		else if(uid){
			location.href="login.html";

		}


	}

})()