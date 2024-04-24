// 修改 setLoginCookie 函數，使其在 console 中可被調用
window.setLoginCookie = function(value) {
    // 設置 login cookie 的值
    document.cookie = "login=" + value;
}

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

function showFlag() {
    var messageBox = document.querySelector('.message-box');
    messageBox.innerHTML += '<p>Flag: Flag is here!</p>';
}

var loginValue = getCookieValue("login");

if (loginValue === "1") {
    showFlag();
}

// 在 console 中提示使用者設置 cookies 的方法
console.log("要更改 cookies 的值，請在 console 中執行 setLoginCookie('1') 並按下 Enter 鍵。");

// 在 console 中提示使用者刷新頁面
console.log("請刷新頁面來查看結果。");
