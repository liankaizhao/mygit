// JavaScript Document
function selectFiles(){
	var result=document.getElementById("tFiles");//获取表单布局
	var mulfiles=document.getElementById("multipleFiles");//获取多个文件
	
	for(var i=0;i<mulfiles.files.length;i++)//遍历所有文件
	{
		var aFile=mulfiles.files[i];//获取单个表单
		var str="<tr><td>"+aFile.name+"</td><td>"+aFile.size+"字节"+aFile.type+"</td><td>"+aFile.lastModifiedDate+"</td></tr>";
		result.innerHTML+=str;
	}
}
		
		 