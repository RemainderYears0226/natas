const articleList = document.getElementById('article-list');
const flag = document.getElementById('flag');
const homeButton = document.getElementById('homeButton');
const searchPageButton = document.getElementById('searchPageButton');

const articles = [
{ id: 1, title: '示例文章', content: '這是一篇示例文章。' }
];

for (const article of articles) {
renderArticle(article);
}

function renderArticle(article) {
const li = document.createElement('li');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const deleteBtn = document.createElement('button');

h3.textContent = article.title;
p.textContent = article.content;
deleteBtn.textContent = '刪除';
deleteBtn.className = 'delete-btn';
deleteBtn.onclick = () => deleteArticle(article.id);

li.appendChild(h3);
li.appendChild(p);
li.appendChild(deleteBtn);
articleList.appendChild(li);
}

function deleteArticle(id) {
const articleIndex = articles.findIndex(article => article.id === id);
if (articleIndex !== -1) {
articles.splice(articleIndex, 1);
articleList.innerHTML = '';
for (const article of articles) {
renderArticle(article);
}
flag.classList.remove('hidden');
setTimeout(() => {
flag.classList.add('hidden');
}, 3000);
}
}

homeButton.addEventListener('click', () => {
// Redirect to home page
window.location.href = 'home.html';
});

searchPageButton.addEventListener('click', () => {
// Redirect to search page
window.location.href = 'search.html';
});
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// 假設的臨時資料庫
const tempDatabase = [
  '這是第一筆資料',
  '這是包含關鍵字的第二筆資料',
  '第三筆資料也包含了關鍵字',
  '這是最後一筆資料'
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
