// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const googleLoginButton = document.querySelector('.custom-button');

    googleLoginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Redirect to another page (you can replace 'another_page.html' with your desired URL)
        window.location.href = 'another_page.html';
    });
});
