function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "jimmydady_53" && password === "123") {
        alert('登入成功!');
        window.location.href = 'grade.html';
    } else {
        alert('登入失敗，請再試一次');
    }
    
}
