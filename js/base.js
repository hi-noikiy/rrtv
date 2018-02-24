function preViewOn() {//鼠标移入预览效果
	var preViewCover=document.querySelectorAll(".preView div");
	for(var p of preViewCover){
			console.log(p.innerHTML+=`<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-play"></use>
</svg>`)
		p.onmouseenter=e=>{
			e.target.style.opacity=0.6;

			if (e.target.querySelector("p")) {
				
			e.target.querySelector("p").style.opacity=1;
			}
			e.target.nextElementSibling.style.transform="scale(1.2)";
			
		}
		p.onmouseleave=e=>{
			e.target.style.opacity=0;
			e.target.nextElementSibling.style.transform="scale(1)"
		}
		p.onclick=e=>{
			var a=e.target.getElementsByTagName("a")[0];
			e.pa
			open(a.href,"_self");
		}
	}
}

function mouseOver() {//header加载函数
	var items = document.querySelectorAll(".head");
	var count = 800;
	for (var i of items) {
		count += 80;
		let a = count;
		i.onmouseover = e => {
			var bar = document.querySelector("#followBar>div");
			bar.style.transform = `translate(${a}px)`;
			e.target.style.backgroundImage = "linear-gradient(to top,#bbb,#E5E5E5)";
		}
		i.onmouseout = e => {
			e.target.style.background = "linear-gradient(to top,#E5E5E5,#FAFAFB)";
		}

	}

}
function search() {
		var input=document.querySelector("#search input");
    	input.onfocus=e=>{
        	e.target.style.border="1px solid #46aedb";
    	}
		input.onblur=e=>{
        	e.target.style.border="none";
    	}
}

(()=>{



	
	(()=>{//创建圆形菜单
		ajax({
			type:"get",
			url:"../data/user/islogin.php",
			dataType:"json"
		}).then(data=>{
			console.log(data);
			var container=document.createElement("div");
			container.className="container";
			document.querySelector("section").appendChild(container);
			console.log(document.querySelector(".container"));
			var str=`<div class="cover" data-uid=${data.uid}>
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-icon25959"></use>
				  </svg>
		</div>		
		<div class="login">
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-denglu"></use>
				  </svg>
		</div>		
		<div class="like">
		<svg class="icon" aria-hidden="true">
		<use xlink:href="#icon-like"></use>
		</svg>
		</div>		
		<div class="config">
		<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-shezhi"></use>
				  </svg>
				  </div>		
				  <div class="list">
				  <svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-list"></use>
				  </svg>
				  </div>	`;
				  document.querySelector(".container").innerHTML=str;
			


			var circles=document.querySelectorAll(".container>div");

				var deg=0;
			document.querySelector(".cover").onclick=e=>{
				console.log(deg);
				if (circles[0].style.transform!=`rotate(0deg)`) {
						deg=-90;
					for(var i=1;i<circles.length;i++){
						let a=0;
						deg+=30;
						a=deg;
						circles[i].style.transform=`rotate(${a}deg) translate(200px) `;
					}
					circles[0].style.transform=`rotate(0deg)`;
				}else{
					for(var i=1;i<circles.length;i++){	
						circles[i].style.transform=`translate(0px) `;
					}
					circles[0].style.transform=`rotate(45deg)`;
				}
			}

			var login=document.getElementsByClassName("login")[0];
			login.onclick=(()=>{
				location="login.html";
				console.log(login);
			})//设置菜单动作

			if (data.ok==1) {
				
			} else {
				var items=document.querySelectorAll(".container div");
				for (const item of items) {
					item.style.display="none"; 						
				}
				document.querySelector(".login").style.display="block"; 	


				
			}
	})

	})();
})();

(()=>{
	ajax({
		type:"get",
		url:"footer.html"
	}).then(data=>{
	console.log(data);
	document.querySelector("footer").innerHTML=data;
	})
})()
// var r;
// function isLogin(){

 
//   ajax({
// 		type:"get",
// 		url:"../data/user/islogin.php",
// 		dataType:"json"
// 	}).then(data=>{
// 	r= data;
// 	console.log(r);
// 	})

// }//data不能在函数外接受
// // var islogin=isLogin();
// isLogin();
// console.dir(r);

