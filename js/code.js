 //document.getElementById("box").style.width="100px";


	// if(document.getElementById('box').offsetWidth < "100px"){
	// document.getElementById('box').style.width = "100%";}
var db1 = document.getElementById('bdes1');
var db2 = document.getElementById('bdes2');
var db3 = document.getElementById('bdes3');
var en1 = document.getElementById('ent1');
var en2 = document.getElementById('ent2');
var en3 = document.getElementById('ent3');

if(document.body.clientWidth > 760){
	db1.style.fontSize = "14px";
	db1.style.margin = "20px";

	db2.style.fontSize = "14px";
	db2.style.margin = "20px";

	db3.style.fontSize = "14px";
	db3.style.margin = "20px";
}
if(document.body.clientWidth < 375){
	en1.style.display = "none";
	en2.style.display = "none";
	en3.style.display = "none";
}