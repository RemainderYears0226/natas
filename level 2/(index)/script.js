document.addEventListener('DOMContentLoaded', function() {
    var loginValue = getCookieValue("logging");

    if (loginValue === "1") {
        showFlag();
    }

    function showFlag() {
        var messageBox = document.querySelector('.message-box');
        if (messageBox) {
            messageBox.innerHTML = '';
            messageBox.innerHTML += '<p>Flag: FHSH{c00kie=1}</p>';
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
        document.cookie = "logging=" + value;
    }

    setLoginCookie("0");
});
