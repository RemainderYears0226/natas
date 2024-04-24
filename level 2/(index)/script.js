// 第二關的flag-3/3: Y29kZX0=
document.addEventListener('contextmenu', function(e) {
    alert('在這裡右鍵不能使用喔!');
    e.preventDefault();
}, false);

// 檢查 cookie 的函數
function getCookieValue(cookieName) {
    // 取得所有的 cookie
    var cookies = document.cookie.split(';');
    // 逐一檢查 cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // 檢查是否為目標 cookie
        if (cookie.indexOf(cookieName) === 0) {
            // 取得 cookie 的值
            return cookie.substring(cookieName.length + 1);
        }
    }
    // 如果找不到目標 cookie，返回空值
    return "";
}

// 顯示 flag 的函數
function showFlag() {
    // 在 message-box 中顯示 flag
    var messageBox = document.querySelector('.message-box');
    messageBox.innerHTML += '<p>Flag: Flag is here!</p>';
}

// 檢查 login cookie 的值
var loginValue = getCookieValue("login");

// 如果 login cookie 的值為 1，顯示 flag
if (loginValue === "1") {
    showFlag();
} else {
    // 否則設置 login cookie 的值為 0
    setLoginCookie("0");
}

// 設置 login cookie 的函數
function setLoginCookie(value) {
    // 設置 login cookie 的值
    document.cookie = "login=" + value;
}
