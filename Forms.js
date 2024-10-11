<script>
    function validateForm() {
        let username = document.forms["userForm"]["username"].value;
        let email = document.forms["userForm"]["email"].value;
        let phone = document.forms["userForm"]["phone"].value;
        let password = document.forms["userForm"]["password"].value;
        let confirmPassword = document.forms["userForm"]["confirmPassword"].value;
        let countryCode = document.forms["userForm"]["country_code"].value;

        // Validate username: 4-12 characters, only letters and numbers
        if (username.length < 4 || username.length > 12 || !isAlphanumeric(username)) {
            alert("Username must be 4-12 characters long and only contain letters or numbers.");
            return false;
        }

        // Validate email: must contain "@" and end with ".com"
        if (!email.includes("@") || !email.endsWith(".com")) {
            alert("Please enter a valid email (must contain '@' and end with '.com').");
            return false;
        }

        // Validate phone number: must follow format "123-456-7890"
        if (!isValidPhoneNumber(phone)) {
            alert("Phone number must be in the format 123-456-7890.");
            return false;
        }

        // Validate password: at least 6 characters, must contain a digit and special character
        if (!isValidPassword(password)) {
            alert("Password must be at least 6 characters long, contain at least one digit and one special character.");
            return false;
        }

        // Confirm password match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        // Validate country code: exactly 3 alphabetic characters
        if (!isValidCountryCode(countryCode)) {
            alert("Country code must contain exactly 3 letters.");
            return false;
        }

        return true; // All validations passed
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

    // Helper function to validate phone number (format: 123-456-7890)
    function isValidPhoneNumber(phone) {
        return phone.length === 12 && phone[3] === '-' && phone[7] === '-' &&
               !isNaN(phone.substring(0, 3)) && !isNaN(phone.substring(4, 7)) && !isNaN(phone.substring(8, 12));
    }

    // Helper function to validate password (at least one digit, one special character, min length of 6)
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

    // Helper function to validate country code (exactly 3 alphabetic characters)
    function isValidCountryCode(code) {
        if (code.length !== 3) return false;
        for (let i = 0; i < code.length; i++) {
            let charCode = code.charCodeAt(i);
            if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }
        return true;
    }
</script>
