const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');


const tempDatabase = [
  'apple',
  'banana',
  'cat',
  'delete',
  'sad'
];

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    searchResults.innerHTML = '';
    const matchedResults = tempDatabase.filter(result =>
      result.toLowerCase().includes(searchTerm)
    );
    if (matchedResults.length > 0) {
      matchedResults.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.textContent = result;
        searchResults.appendChild(resultElement);
      });
    } else {
      searchResults.innerHTML = '<p>沒有符合的搜尋結果</p>';
    }
  } else {
    searchResults.innerHTML = '<p>請輸入關鍵字</p>';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var loginValue = getCookieValue("admin");
    if (loginValue === "True") {
      showFlag();
    }

    function showFlag() {
      var messageBox = document.createElement('div');
      messageBox.classList.add('message-box');
      messageBox.innerHTML = '<p>Flag: FHSH{c00kie=1}</p>';
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
