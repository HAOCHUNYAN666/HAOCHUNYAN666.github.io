	var nowimg=2;
	var maximg=2;
	function show(){
		var nextimg=nowimg+1;
		if(nextimg==maximg+1){
			nextimg=1;
		}
		document.getElementById("img"+nextimg).style.display="";
		document.getElementById("img"+nowimg).style.display="none";
		if (nowimg==maximg){
			nowimg=1;
		}else{
			nowimg++;
		}
		setTimeout("show()",1000);
	}