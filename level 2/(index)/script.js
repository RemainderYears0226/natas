document.addEventListener('DOMContentLoaded', function() {
  var loginValue = getCookieValue("admin");
  if (loginValue === "True") {
    showFlag();
  }

  function showFlag() {
    var messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.innerHTML = '<p>Flag: FHSH{c00kie=1}</p>';
    messageBox.style.position = 'fixed';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translate(-50%, -50%)';
    messageBox.style.backgroundColor = '#fff';
    messageBox.style.padding = '20px';
    messageBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    messageBox.style.zIndex = '9999';
    document.body.appendChild(messageBox);
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
    document.cookie = "admin=" + value;
  }

  setLoginCookie("False");
});
