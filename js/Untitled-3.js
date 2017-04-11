
function JisuanResult(){
	var forms=document.forms["resultform"]//获取表单
	var first=forms['sg'].value;//获取身高
	var second=forms['tz'].value;//获取体重
	var firsthigh=first/10;
	var result=second/(firsthigh*firsthigh);//计算结果
	result=result*100;
	forms['result'].value=result;
	if(result<19)
	{
		alert("您的体重偏低，请增加饮食！");
	}
	else if(result>=21&&result<=25)
	{
		alert("恭喜您，您的体重在正常范围之内！");
	}
	else
	{
		alert("您的体重偏重，请注意饮食！");
	}
}
	