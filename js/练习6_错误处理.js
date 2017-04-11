// JavaScript Document
function getFile(){
	var file=document.getElementById("selectFile").files[0];
	if(file=null||file='undefined'){
		alert("您没有选择文件，请选择文件");
	}
	else{
		var textType=/*text.*/;
		if(!file.type.match(textType)){
			alert(file.name+"不是文本文件，请重新选择文件上传");
			return ;
			}
			else{
				var reader=new FileReader();
				reader.readAsText(file."gb2312");
				reader.onload=function(e){
					document.getElementById("showInfro").innerHTML=this.result;	
					}
					reader.onerror=function(res){
						var num=res.target.error.code;
						document.getElementById("showInfro").innerHTML="文件无法显示：";
						if(num==1){
							document.getElementById("showInfro").innerHTML+="无法找到源文件或已经被修改";}
							else if(num==2){
									document.getElementById("showInfro").innerHTML+="无法读取数据文件";}
							else if(num==3){
								document.getElementById("showInfro").innerHTML+="终止文件读取过程";}
									else if(num==4){
										document.getElementById("showInfro").innerHTML+="不能读取文件数据";}
										else if(num==5){
											document.getElementById("showInfro").innerHTML+="读取的文件太大";}
						
						
						}
				
				}
		}
	}