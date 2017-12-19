function checkName(){
			var a=document.getElementById("Name").value;
			if (a==""){
				document.getElementById("Namespan").innerHTML="Name cannot be empty";
			}else if(a.length<4){
				document.getElementById("Namespan").innerHTML="Name must not be less than four";
			}else if(a.length<10){
				document.getElementById("Namespan").innerHTML="true";
			}else{
				document.getElementById("Namespan").innerHTML="Name is too long";
			}
		}
function checkEmail(){
			var a=document.getElementById("Email").value;
			var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			if (b.test(a)){
				document.getElementById("Emailspan").innerHTML="Mailbox mee";
			}else{
				document.getElementById("Emailspan").innerHTML="Mailbox does not conform to";
			}
		}
function checkphoneNum(){
			var a=document.getElementById("phoneNum").value;
			var b=/^1\d{10}$/;
			if (b.test(a)){
				document.getElementById("phoneNumspan").innerHTML="Phone format correct";
			}else{
				document.getElementById("phoneNumspan").innerHTML="Phone format is not correct";
			}
		}