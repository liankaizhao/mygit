// JavaScript Document
function getFile(){
	var file=document.getElementById("selFile").files[0];
	if(file==null||file='undefined'){
	alert("您没有选择文件，请重新选择");}
	else{
		var reader=RileReader();
		reader.ReadAsDataURL(file);
		reader.onload=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了 onload事件</li>";}
		reader.onloadstart=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了onloadstart事件";}
		reader.onabort=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了onabort事件";}
		reader.onloadend=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了onloadend事件";}
		reader.onprogress=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了onprogress事件";}
		reader.onerror=function(e){
			document.getElementById("myPic").src=e.target.result;
			document.getElementById("msgInfro").innerHTML+="<li>触发了onerror事件";}
	
	}