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
  if (messageBox) {
    messageBox.innerHTML = '<p>Flag: Flag is here!</p>';
  }
}

var loginValue = getCookieValue("login");
if (loginValue === "1") {
  showFlag();
} else {
  setLoginCookie("0"); // 設定初始 cookie 值為 0
  var messageBox = document.querySelector('.message-box');
  if (messageBox) {
    messageBox.innerHTML = '<p>你可以在這裡找到下一關的 Flag，但是我們對它做過了一些處理...</p><p>提示: 請透過 F12 開發者工具中的 Application 標籤,將 login Cookie 值改為 1。</p>';
  }
}

function setLoginCookie(value) {
  document.cookie = "login=" + value;
}
