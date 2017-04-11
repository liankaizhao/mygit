// JavaScript Document
function getBinaryFile(){
	var file=document.getElementById("selFile").files[0];
	if(file==null||file="undefined"){//判断是否选择了文件
		alert("您还没有选择文件，请选择文件。");
	}
	else {//如果选择了文件
		var reader=new FileReader();
		reader.readAsBinaryString(file);
		reader.onload=function (e){
			document.getElementById("readResult").innerHTML=this.result;
		}
	}
}

function getPicFile(){
	var filelist=document.getElementById("selFile");//获取图像文件
	if(filelist.files.length==0){//判断是否选择了文件
		alert("您还没有选择文件，请选择文件。");
		else{
			for(var i=0;i<filelist.files.length;i++)//循环显示文件
			{
				var filelist.files[i];
				var picType=/image.*/;
				if(!file.type.match(picType)){
					alert(file.name+"不是图像文件，无法上传！");
	                continue;
				}
				else{
					var reader=new FileReader();//实例化FileReader()接口对象
					reader.onload=function(e){//显示图像
						document.getElementById("showInfro").innerHTML+="<img src="e.target.result+"width=200 height=150 style='padding-right:50px; padding-bottom:20px;'>";
					};
				}
				
			}
		}
	}
	
	
function getTxtFile(){
	var file=document.getElementById("selfFile");
	if(file==null||file='undefined'){
		alert("您没有选择文件，请选择文件");
	}
	else{
		var txtType=/text.*/;
		if(!file.type.match(txtType)){
			alert(file.name+"不是文本文件，请重新选择文件进行上传！");
		}
		else{
		var reader=new FileReader();
		reader.readAsText(file);
		reader.onload=function(e){
			document.getElementById("showInfro").innerHTML=this.result;
		}
	}
}
}

function checkInputContent(){
	var password=document.getElementById("userpass");
	var passwordconfirm=document.getElementById("userconfirmpass");
	//确认密码
	if (password.value.length<6) {
		password.setCustomValidity("请重新输入密码，且密码长度在6-14位之间");
	else
		password.setCustomValidity("");


	};
	if (password.value!=passwordconfirm.value) {
		password.setCustomValidity("两次输入的密码不一致，请重新输入");
	else
		password.setCustomValidity("");
	};

}

//视频下载错误检测
function check(){
	var video=document.getElementById("myVideo");
	var errorCode=video.error;
	video.addEventListener("error".function(){
		switch (errorCode.code){
			case 1:
			alert("系统的下载过程被终止");
			break;
			case 2:
			alert("网络发生故障，下载意外终止");
			break;
			case 3:
			alert("解码失败")；
			break;
			case 4:
			alert("不支持播放的视频格式")；
			break;

			default:
			alert("未知错误")；
			break；
		}
	}),false
}

//设置窗口大小
var pageWidth=window.innerWidth,
	pageHeight=window.innerHeight;
if (typeof pageWidth!="number") {
	if (document.compatMode=="CSS1Compat") {
		pageWidth=document.documentElement.clientWidth;
		pageHeight=document.documentElement.clientHeight;
	}else{
		pageWidth=document.body.clientWidth;
		pageHeight=document.body.clientHeight;
	};
};

//检测弹出窗口是否被屏蔽
var blocked=false;
try{
	var wroxWin=window.open("http://www.wrox.com","_blank");
	if(wroxWin==null){
		blocked=false;
		
		}
		catch(ex){
			blocked=true;
		}
if (blocked) {
	alert("the popup is blocked")
};


}	

//超时调用函数
setTimeout(function(){
	alert("hello,world");
},1000);			
	
//取消超时调用函数	
var setTimeId=setTimeout(function(){
	alert("this message is true");
},2000)

clearTimeout(setTimeId);	


//取消间歇调用函数
var num=0;
var max=10;
var intervalId=null;
function createInterval()	{
	num++;
	//如果调用的次数达到最大值，则取消后面后续尚未执行的调用。
	if (num==max) {
		claerIntervl(intervalId);
		alert("done");
	};
}
intervalId=setinterval(createInterval,10000);
				
				
//设置间歇调用函数,num0.5秒递增一次
var num=0;
var max=20;
function setInterval(){
	num++;
	//如果执行次数为达到设定的值，则设置另一次超时调用
	if(num<max){
		setTimeout(setinterval,500);
	}
	else{
		alert("done");
	}
}
setTimeout(setInterval,500);

//解析查询字符串
function getQueryStringArgs(){
	//取得查询字符串并去开头的问号
	var qs=(location.search.length>0?location.search.substring(1):""),
	//保存数据对象
	args={},
	//取得每一项
	items=qs.length?qs.split("&"):[],
	item=null,name=null,
	value=null;
	i=0;
	len=items.length;
	//逐个将每一项添加到args对象中
	for (var i = 0,i<len; i ++) {

		item=items[i].split("=");
		//解码value和name
		value=decodeURIComponent(item[0];
		name=decodeURIComponent(item[1]);
		if(name.length){
			args[name]=value;

		}
	}
	return args;
}

function getQueryStringArgs(){
	var qs=(location.search.length>0?location.search.substring():""),
	args={},
	items=qs.length?qs.split("&"):[],
	item=null,
	value=null,
	name=null;
	var i=0;
	len=items.length;
	for (var i = 0; i < len; i++) {
		item=items[i].split("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
	     if(name.length){
	     	args[name]=value;

	     }

}












setTimeout(function(){location.replace("http://www.huawei.com/");},1000);




function superType(){
	this.property=true;

}
superType.prototype.getSuperValue=function(){
	return this.property;
}

function subType(){
	this.subproperty=false;
}
//继承superType
subType.prototype=new superType();

//添加新方法
subType.prototype.getSubValue=function(){
	return this.subproperty;
}

//重写超类型中的方法
superType.prototype.getSuperValue=function(){
	return false;
}

var instance=new subType();
alert(instance.getSuperValue());




//检测插件
function  hasPlugin(){
	name=name.toLowerCase();
	for(var i=0;i<navigator.plugins.length;i++){
		if (navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
			return true;
		}
	}
	return false;
}

alert(hasPlugin("Flash"));
alert(hasPlugin("QuickTime"));


//用户代理字符检测脚本
var client=function(){
	//呈现引擎
	var engine={
		ie:0,
		webkit:0,
		khtml:0,
		opera:0,
		gecko,
		ver:null

	}
 //浏览器
	var browser={
		ie:0,
		chrome:0,
		firefox:0,
		safari:0,
		opera:0,
		ver:null
	}

//平台、设备和操作系统

var system={
	win:false,
	mac:false,
	x11:false,

	//移动设备
	iphone:false,
	ipod:false,
	ipad:false,
	ios:false,
	android:false,
	nokiaN:false,
	winMobile:false,

	//游戏系统
	wii:false,
	ps:false ,


}
//检测呈现引擎和浏览器
var ua=navigator.userAgent;
if(window.opera){
	engine.ver=browser.ver=window.opera.version();
	engine.opera=browser.opera.parseFloat(engine.ver);

}else if(/AppleWebKit\/(\S+)/.test(ua)){
	engine.ver=RegExp["$1"];
	engine.webkit=parseFloat(engine.ver);
}
  //确定是Chrome还是Ssafari
	if(/chrome\/(\S+)/.test(ua)){
		browser.ver=RegExp["$1"];
		browser.chrome=parseFloat(browser.ver);
	}
	else if(/version\/(\S+)/.test(ua)){
			browser.ver=RegExp["$1"];
			browser.safari=parseFloat(browser.ver);
		}else{
			var safariVersion=1;
			if(engine.webkit<100){
				safariVersion=1;
			}
			else if(engine.webkit<312){
				safariVersion=1.2;
			}
			else if(engine.webkit<412){
				safariVersion=1.3;

			}
			else{
				safariVersion=2;
			}
			browser.safari=browser.ver=safariVersion;
		}

}else if(/Khtml\/(\S+).test(ua)||/Konqueror\/([^;]+)/test(ua)){
	engine.ver=browser.ver=RegExp["$1"];
	engine.Khtml=browser.kong=parseFloat("engine.ver");
}
else if (gecko\/d{8}/.test(ua)) {
	engine.verb=browser.ver=RegExp["$1"];
	engine.gecko=parseFloat("engine.ver");
};
if(/firefox\/(\S+)/.test(ua)){
	browser.ver=browser.ver=RegExp["$1"];
	browser.firefox=parseFloat("browser.ver");
}
else if(/MI]SIE\/(\S+).test(ua)||/Konqueror\/([^;]+)/test(ua)){
	engine.ver=browser.ver=RegExp["$1"];
	engine.ie=browser.ie=parseFloat("engine.ver");
}

//检测浏览器
browser.ie=engine.ie;
browser.opera=engine.opera;

//检测平台
var p=navigator.platform;
system.win=p.indexOf("Win")==0;
system.mac=p.platform.indexOf("Mac")==0;
system.x11=(p=="x11")||(p.indexOf("Linux")==0);

//检测Window系统
if(system.win){
	if (/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua) {
		if(RegExp["$1"]=="NT"){
			switch(RegExp["$1"]){
				case "5.0":
				system.win="2000";
				break；
				case "5.1":
				system.win="xp'";
				break；
                case "6.0":
				system.win="visa";
				break；
				case "6.1":
				system.win="7";
				break；
				default:
				system.win="NT";
				break；
			}
			else if(RegExp["$1"]=="9x"){
				system.win="ME";
			}else{
				system.win="RegExp["$1"];
			}
		}

	}

//移动设备
system.iphone=ua.indexOf("iphone")>-1;
system.ipod=ua.indexOf("iPod")>-1;
system.ipad=ua.indexOf("ipad")>-1;

return {
		engine:engine,
		browser:browser,
		system:system
	};
}();



function checkWords(){
var myarea=document.getElementById("myTextArea");}