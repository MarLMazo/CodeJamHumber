/*

	Your JavaScript will go here!
	To learn more about JavaScript, please visit this link
	
	https://www.w3schools.com/js/default.asp
	
*/


function validateForm(){

	var errorMessage = document.getElementById("errorMessage");
	var customerName = document.getElementById("customerName").value;
	var customerAddress= document.getElementById("customerAddress").value;
	
	errorMessage.innerHTML = "";
	// if( customerName === ""){
	// 	errorMessage.style.visibility="visible";
	// 	errorMessage.innerHTML = "Please Enter Your Name <br>";
	// 	return false;
	// }
	// else
	// {
	// 	errorMessage.style.visibility = "hidden";
	// }

	// if(customerAddress === ""){
	// 	errorMessage.style.visibility="visible";
	// 	errorMessage.innerHTML += "Please Enter Your Address";
	// 	return false;
	// }
	// else
	// {
	// 	errorMessage.style.visibility = "hidden";
	// }

	if(customerName === "" && customerAddress === ""){
		errorMessage.style.visibility = "visible";
		errorMessage.innerHTML = "Please Enter your Name <br> Please Enter your Address";
		return false;
	}
	else if( customerName === ""){
		errorMessage.style.visibility = "visible";
		errorMessage.innerHTML = "Please Enter your Name";
		return false;
	}
	else if(customerAddress ===""){
		errorMessage.style.visibility = "visible";
		errorMessage.innerHTML = "Please Enter your Address";
		return false;
	}
	else{
		errorMessage.style.visibility="hidden";
	}

}