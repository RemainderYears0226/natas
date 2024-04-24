// 获取并显示 flag 的函数
function showFlag() {
    var messageBox = document.querySelector('.message-box');
    messageBox.innerHTML += '<p>Flag: Flag is here!</p>';
}

// 获取 cookie 值的函数
function getCookieValue(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return "";
}

// 检查 cookie 值是否为 1，如果是则显示 flag
var loginValue = getCookieValue("login");
if (loginValue === "1") {
    showFlag();
}

// 将设置 cookie 的函数移动到全局作用域，以便在浏览器开发者工具中调用
window.setLoginCookie = function(value) {
    document.cookie = "login=" + value;
    // 在更改 cookie 值后，检查并显示 flag（如果 cookie 值为 1）
    if (value === "1") {
        showFlag();
    }
}
