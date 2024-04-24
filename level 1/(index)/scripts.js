document.addEventListener("DOMContentLoaded", function() {
    var userInput = document.getElementById('user-input');

    userInput.addEventListener('input', function() {
        document.querySelector('.message-box').innerHTML = userInput.value;
    });
});
