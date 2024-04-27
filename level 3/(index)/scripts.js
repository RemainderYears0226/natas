const googleLoginButton = document.querySelector('.google-login-button');

googleLoginButton.addEventListener('click', () => {
    // Simulate Google login process (for demonstration purposes)
    const userLoggedIn = confirm('模擬 Google 登入？');

    if (userLoggedIn) {
        alert('這是錯誤的地方。');
    } else {
        alert('你找到了正確的地方！');
    }
});
