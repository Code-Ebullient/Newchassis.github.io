/*function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x=="") {
		alert("Name must be filled");
		return false;
	}
}*/

/*function form_validator(myForm){
	if (myForm.message.value=="") {
		alert("Atleast 20 characters");
		myForm.message.focus();
		return(false);
	}
	return(true);
}*/

function validate(myForm){
	var title = document.getElementById("title").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message").value;

	error_message.style.padding = "10px";

	var text;
	if (name.length < 4) {
		text = "Enter a valid name";
		error_message.innerHTML = text;
		return false;
	}

	if (email.indexOf("@")==-1 || email.length < 6) {
		text = "Invalid email";
		error_message.innerHTML = text;
		return false;
	}

	if (message.length <= 20) {
		text = "More characters are needed";
		error_message.innerHTML = text;
		return false;
    }

    alert("Successful");
    return true;
}

//function to display Popup
function div_show() {
	document.getElementById('wrapper').style.display = "block";
}

//function to Hide Popup
function div_hide(){
	document.getElementById('wrapper').style.display = "none";
}