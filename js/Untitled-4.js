// JavaScript Document
function Calculate()
	{
	     var forms=document.forms['resultform'];//获取页面表单
	     var first=forms['sg'].value;//获取用户身高
	     var second=forms['tz'].value;//获取用户体重
	     var firstHigh=first/10;
	     var result=second/(firstHigh*firstHigh); 
	     result=result*100;
	     forms['result'].value=result;//为out元素赋值
	  if(result>=21&&result<=25)//根据计算的结果进行判断
	  {
	   alert("恭喜，你的体重在正常范围之内");
	  }
	else if(result<21)
	{
	  alert("你的体重偏轻，得注意饮食啊");
	}
	 else{
	  	alert("不能再吃了，得减肥了");
	      }
    }