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
  if (messageBox) { // 檢查 .message-box 元素是否存在
    messageBox.innerHTML += '<p>恭喜你找到了 Flag! 請透過 F12 開發者工具中的 Application 標籤,將 login Cookie 值改為 1 來顯示 Flag。</p>';
    messageBox.innerHTML += '<p>Flag: Flag is here!</p>';
  }
}

var loginValue = getCookieValue("login");
if (loginValue === "1") {
  showFlag();
}
