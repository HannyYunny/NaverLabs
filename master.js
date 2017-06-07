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



// function() {
// 	"user strict";
// 	$("#header .minibar button, #lnb button").on("click",
// 		function(e){
// 			$("body").toggleClass("menu")
// 		}),
// 	$("#footer .go-top").on("click",function(){window.scrollTo(0,0)})}()


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
