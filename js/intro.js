// JavaScript Document
//var img = document.getElementById("home_img_1");
		var x1 = 0;
		var x2 = 0;
		var x3 = 0;
		var a = self.setInterval("move()", 50);
function move()
	{
		document.getElementById("home_img_1").style.backgroundPositionY = x1+"px";
		document.getElementById("home_img_2").style.backgroundPositionY = x2+"px";
		document.getElementById("home_img_3").style.backgroundPositionY = x3+"px";
		x1 = x1-1;
		x2 = x2-2;
		x3 = x3-3;
		if(x1 <= -900)x1 = 0;
		if(x2 <= -900)x2 = 0;
		if(x3 <= -1200)x3 = 0;
	}