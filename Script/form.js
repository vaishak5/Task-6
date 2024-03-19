document.getElementById("mobile").addEventListener("input", function () {
    document.getElementById("mobileError").innerHTML = "";
});

document.getElementById("password").addEventListener("input", function (event) {
    var password = event.target.value;
    var passwordError = document.getElementById("passwordError");

    // Reset error message
    passwordError.innerHTML = "";

    // Define regular expressions for each condition
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var numberRegex = /\d/;

    //Check each condition and display error message if not met
    /*if (!uppercaseRegex.test(password)) {
        passwordError.innerHTML += "Password must contain at least one uppercase letter.<br>";
    }

    if (!lowercaseRegex.test(password)) {
        passwordError.innerHTML += "Password must contain at least one lowercase letter.<br>";
    }

    if (!specialCharRegex.test(password)) {
        passwordError.innerHTML += "Password must contain at least one special character (!@#$%^&*()_+-=[]{};':\"\\|,.<>/?).<br>";
    }

    if (!numberRegex.test(password)) {
        passwordError.innerHTML += "Password must contain at least one number.<br>";
    }

    // Check if password length is at least 8 characters
    if (password.length < 8) {
        passwordError.innerHTML += "Password must be at least 8 characters long.<br>";
    }*/
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
    } else if (/^\d+$/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "First name cannot contain numbers";
        isValid = false;
    }
	

    if (lastname === "") {
        document.getElementById("lastnameError").innerHTML = "Last name is required";
        isValid = false;
    } else if (/^\d+$/.test(lastname)) {
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
        // Display filled details
        /*var filledDetails = "<h3>Filled Details:</h3>";
        filledDetails += "<p><strong>First Name:</strong> " + firstname + "</p>";
        filledDetails += "<p><strong>Last Name:</strong> " + lastname + "</p>";
        filledDetails += "<p><strong>Address:</strong> " + address + "</p>";
        filledDetails += "<p><strong>Mobile Number:</strong> " + mobile + "</p>";
        filledDetails += "<p><strong>Email:</strong> " + email + "</p>";
        filledDetails += "<p><strong>Password:</strong> " + password + "</p>";
        filledDetails += "<p><strong>Confirm Password:</strong> " + confirmPassword + "</p>";*/
	
	var filledDetails =" ";
        document.getElementById("formDetails").innerHTML = filledDetails;

        // Show alert
        alert("Form submitted successfully!");
	
	var inputs = document.getElementsById("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.display = "hidden";
        }

        var textarea = document.getElementsById("textarea")[0];
        textarea.style.display = "hidden";
    }
	
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", validateForm);

	
});