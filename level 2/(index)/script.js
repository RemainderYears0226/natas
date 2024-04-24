// 第二關的flag-3/3: Y29kZX0=
document.addEventListener('contextmenu', function(e) {
    alert('在這裡右鍵不能使用喔!');
    e.preventDefault();
}, false);
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

function setLoginCookie(value) {
    // 設置 login cookie 的值
    document.cookie = "login=" + value;
}

setLoginCookie("0");
這是我的index.html:
<!DOCTYPE html>
<html>
<head>
    <!--第二關的flag-2/3: NyeXB0X2Rl -->
    <!--小工具 : https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false) -->
    <title>FHSH2</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="script.js"></script>
</head>
<body oncontextmenu="return false;">
    <div class="header">
        <h1>FHSH2</h1>
    </div>
    <img src="img.jpg" alt="Level 2 Image">
    <div class="message-box">
        <p>你可以在這裡找到下一關的Flag，但是我們對它做過了一些處理...</p>
    </div>
</body>
</html>
