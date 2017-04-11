function JiSuanResult(){
	var forms=document.forms["resultform"];
	var first=forms['sg'].value;
	var second=forms['tz'].value;
	var firstHigh=first/10;
	var result=second/firstHigh*firstHigh;
	result=result*100;
	forms['result'].value=reslut;
	if(result>=21&&result<=25){}
	   alert("恭喜，你的体重在正常范围之内");}
	else if(result<21)
	{
	  alert("你的体重偏轻，得注意饮食啊");
	}
	  else{
	  	alert("不能再吃了，得减肥了");
	  }
}
