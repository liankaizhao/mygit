// JavaScript Document
function check(){
	var account=document.getElementsById("account");
	var pattern=/.@/;
	if(!account.test(pattern)){
		alert("请输入正确的邮箱格式");
		}
		
}