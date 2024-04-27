// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;

        // Simulate Google login process (for demonstration purposes)
        const userLoggedIn = confirm('模擬 Google 登入？');

        if (userLoggedIn) {
            // Redirect to incorrect page
            window.location.href = 'incorrect.html';
        } else {
            // Redirect to correct page
            window.location.href = 'correct.html';
        }
    });
});
