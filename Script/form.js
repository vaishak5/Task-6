document.getElementById("firstname").addEventListener("input", function () {
    var firstname = document.getElementById('firstname').value.trim();
    var firstnameError = document.getElementById("firstnameError");
    firstnameError.innerHTML = "";
    
    if (/\d/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "First name cannot contain numbers";
    }
});

document.getElementById("lastname").addEventListener("input", function () {
    var lastname = document.getElementById('lastname').value.trim();
    var lastnameError = document.getElementById("lastnameError");
    lastnameError.innerHTML = "";
    
    if (/\d/.test(lastname)) {
        document.getElementById("lastnameError").innerHTML = "Last name cannot contain numbers";
    }
});




document.getElementById("mobile").addEventListener("input", function () {
    document.getElementById("mobileError").innerHTML = "";
});

document.getElementById("password").addEventListener("input", function (event) {
    var password = event.target.value;
    var passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = "";
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var numberRegex = /\d/;

});

document.getElementById("email").addEventListener("input", function () {
   var email = this.value.trim();
   if (validateEmail(email)) {
      document.getElementById("email").style.display = "none";
   }
});

function validateForm() {
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var address = document.getElementById("address").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";

    var isValid = true;

    if (firstname === "") {
        document.getElementById("firstnameError").innerHTML = "First name is required";
        isValid = false;
    } else if (/\d/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "First name cannot contain numbers";
        isValid = false;
    }
	
	

    if (lastname === "") {
        document.getElementById("lastnameError").innerHTML = "Last name is required";
        isValid = false;
    } else if (/\d/.test(lastname)) {
        document.getElementById("lastnameError").innerHTML = "Last name cannot contain numbers";
        isValid = false;
    }
	

    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required";
        isValid = false;
    }
	

    if (!(/^\d{10}$/.test(mobile))) {
        document.getElementById("mobileError").innerHTML = "Invalid mobile number";
        isValid = false;
    }
	

    if (!(/\S+@\S+\.\S+/.test(email))) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        isValid = false;
    }
	

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password";
        isValid = false;
    }
	

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        var filledDetails =" ";
        document.getElementById("formDetails").innerHTML = filledDetails;
	alert("Form submitted successfully!");
	window.location.reload();
	}
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", validateForm);

});