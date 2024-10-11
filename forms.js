function validateForm() {
    let username = document.forms["userForm"]["username"].value;
    let email = document.forms["userForm"]["email"].value;
    let phone = document.forms["userForm"]["phone"].value;
    let password = document.forms["userForm"]["password"].value;
    let confirmPassword = document.forms["userForm"]["confirmPassword"].value;

    // Username validation (4-12 alphanumeric characters)
    if (username.length < 4 || username.length > 12 || !isAlphanumeric(username)) {
        alert("Username must be 4-12 characters long and only contain letters or numbers.");
        return false;
    }

    // Email validation (simple check for "@" and ".com")
    if (!email.includes("@") || !email.endsWith(".com")) {
        alert("Please enter a valid email (must contain @ and end with .com).");
        return false;
    }

    // Phone validation (simple format check: 123-456-7890)
    if (!isValidPhoneNumber(phone)) {
        alert("Phone number must be in the format 123-456-7890.");
        return false;
    }

    // Password validation (at least 6 characters, must include a digit and a special character)
    if (!isValidPassword(password)) {
        alert("Password must be at least 6 characters long and include at least one digit and one special character.");
        return false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

// Helper function to check if a string is alphanumeric
function isAlphanumeric(str) {
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57) &&  // 0-9
            !(charCode >= 65 && charCode <= 90) &&  // A-Z
            !(charCode >= 97 && charCode <= 122)) { // a-z
            return false;
        }
    }
    return true;
}

// Helper function to validate phone number
function isValidPhoneNumber(phone) {
    return phone.length === 12 && phone[3] === '-' && phone[7] === '-' &&
           !isNaN(phone.substring(0, 3)) && !isNaN(phone.substring(4, 7)) && !isNaN(phone.substring(8, 12));
}

// Helper function to validate password
function isValidPassword(password) {
    let hasDigit = false;
    let hasSpecialChar = false;
    let specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    if (password.length < 6) return false;

    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (!isNaN(char)) hasDigit = true;
        if (specialChars.includes(char)) hasSpecialChar = true;
    }

    return hasDigit && hasSpecialChar;
}
