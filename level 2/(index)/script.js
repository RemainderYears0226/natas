// 第二關的flag-3/3: Y29kZX0=
document.addEventListener('contextmenu', function(e) {
    alert('在這裡右鍵不能使用喔!');
    e.preventDefault();
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var loginValue = getCookieValue("login");

    if (loginValue === "1") {
        showFlag();
    }

    function showFlag() {
        var messageBox = document.querySelector('.message-box');
        if (messageBox) {
            messageBox.innerHTML = '<p>Flag: Flag is here!</p>';
        }
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

    function setLoginCookie(value) {
        // 設置 login cookie 的值
        document.cookie = "login=" + value;
    }

    if (loginValue !== "1") {
        clearMessageBox();
    }

    function clearMessageBox() {
        var messageBox = document.querySelector('.message-box');
        if (messageBox) {
            messageBox.innerHTML = '';
        }
    }

    setLoginCookie("0");
});
