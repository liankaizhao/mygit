// JavaScript Document
function returnCheckContent(){
	var password=document.getElementById("myPassword");//密码
	var passwordconfirm=document.getElementById("myPassword1");//确认密码
	if(password.value.length<6){
	     password.setCustomValidity("请重新输入密码，密码长度为6-20位字符");
	}
	  else{
		password.setCustomValidity("");
	}
	
	if(password.value!=passwordconfirm){
		passwordconfirm.setCustomValidity("两次输入的密码不一致，请重新输入！");
	}
		else{
			passwordconfirm.setCustomValidity("");
		}
}
		
		
		
		