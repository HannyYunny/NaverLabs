document.getElementById("go-top").onclick = function() {
	document.body.scrollTop = 0; // For Chrome, Safari and Opera 
  	document.documentElement.scrollTop = 0; // For IE and Firefox
}

document.getElementById("btn_close").onclick = function() {
	var x= document.getElementById("main");
   if(x.classList) {
   	x.classList.remove("menustyle");
    } 
    else {
      x.className = x.className.replace(/\bmenustyle\b/g, "");
    }
}

document.getElementById('myButton').onclick = function() {
	var x= document.getElementById("main");
   if(x.classList) {
   	x.classList.toggle("menustyle");
   }
   else { // for IE.9
    	var classes = x.className.split(" ");
      var i = classes.indexOf("menustyle");
        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("menustyle");
            x.className = classes.join(" ");
    }
}




//width, height 구해서 .background에 추가하기
window.onload = function() {Attr();}
function Attr() {
var mywidth = window.innerWidth;
var myheight = window.innerHeight;
var scenes_left = document.getElementById('scenes')
var len = document.getElementsByClassName("background");
for (var i = 0; i < len.length; i++) {
	len[i].setAttribute("style","width:"+mywidth+"px; height:"+myheight+"px; top=0px; left=0px;");
	}
	scenes_left.style.left = "0px";
}
//previous, next add on classList
window.onload=function toggle_on() {
	var mywidth = window.innerWidth;
	var element_left = document.getElementById('scenes');
	var left_value = parseInt(window.getComputedStyle(element_left,null).getPropertyValue("left"));
	var next_on = document.getElementsByClassName('next');
	var previous_on = document.getElementsByClassName('previous');
		 //next에 on 토글 시키기
		 if (next_on[0].classList) { 
		 	next_on[0].classList.toggle("on");
		 }
	   else { // for IE.9
	    	var classes = next_on[0].className.split(" ");
	      var j = classes.indexOf("on");
	        if (j >= 0) 
	            classes.splice(j, 1);
	        else 
	            classes.push("on");
	            next_on[0].className = classes.join(" ");
	    }
	    //previous on 토글 시키기	
		 if (previous_on[0].classList) { 
		 	previous_on[0].classList.toggle("on");
		 }
	   else { // for IE.9
	    	var classes = previous_on[0].className.split(" ");
	      var n = classes.indexOf("on");
	        if (n >= 0) 
	            classes.splice(n, 1);
	        else 
	            classes.push("on");
	            previous_on[0].className = classes.join(" ");
	    }
	    //remove on	
		if (left_value == 0) {
			previous_on[0].classList.remove("on");
		}
		if (left_value == 5*(15-mywidth)) {
			next_on[0].classList.remove("on");
		}
}

//previous, next click
document.getElementsByClassName('next')[0].onclick = function() {
	var mywidth = window.innerWidth;
	var element_left = document.getElementById('scenes');
	var left_value = parseInt(window.getComputedStyle(element_left,null).getPropertyValue("left"));
	var next_on = document.getElementsByClassName('next');
	var previous_on = document.getElementsByClassName('previous');
	left_value = left_value + 15 - mywidth + "px";
	element_left.style.left = left_value;
	var left_number = parseInt(window.getComputedStyle(element_left,null).getPropertyValue("left"));
		if (left_number != 0) {
			previous_on[0].classList.toggle("on", true);
		}
		if (left_number == 5*(15-mywidth)) {
			next_on[0].classList.remove("on");
		}		
}
document.getElementsByClassName('previous')[0].onclick = function() {
	var mywidth = window.innerWidth;
	var element_left = document.getElementById('scenes');
	var left_value = parseInt(window.getComputedStyle(element_left,null).getPropertyValue("left"));
	var next_on = document.getElementsByClassName('next');
	var previous_on = document.getElementsByClassName('previous');
	left_value = left_value - 15 + mywidth + "px";
	element_left.style.left = left_value;
	var left_number = parseInt(window.getComputedStyle(element_left,null).getPropertyValue("left"));
		if (left_value != (15-mywidth)*5) {
			next_on[0].classList.add("on");
		}
		if (left_number == 0) {
			previous_on[0].classList.remove("on");
		}		
}


// function div2Resize() {
//    var div2 = document.getElementById('div2');
//    div2.style.width = window.innerWidth - 200 + 'px';
// }
// window.onload = function() {
//    div2Resize();

//    // 브라우저 크기가 변할 시 동적으로 사이즈를 조절해야 하는경우
//    window.addEventListener('resize', div2Resize);
// }





// document.querySelector('.scene-indicator>button').onclick = function() {
// 	var y=document.getElementsByClassName('scene-indicator');
// 	if(y.classList) {
// 		y.classList.toggle('on');
// 	}
// }

// var selector = document.querySelectorAll('div.scene-indicator > button::before')
// console.log(selector[2])

