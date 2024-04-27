const googleLoginButton = document.querySelector('.google-login-button');
const messageBox = document.querySelector('.message-box');

googleLoginButton.addEventListener('click', () => {
    const userLoggedIn = confirm('模擬 Google 登入？');

    if (userLoggedIn) {
        messageBox.innerHTML = '<p>這是錯誤的地方。</p>';
    } else {
        messageBox.innerHTML = '<p>你找到了正確的地方！</p>';
    }
});
