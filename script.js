function validateForm() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (userId === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    errorMessage.textContent = "Registration successful!";
    return true;
}
