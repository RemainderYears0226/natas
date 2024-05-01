const articleList = document.getElementById('article-list');
const flag = document.getElementById('flag');
const homeButton = document.getElementById('homeButton');
const searchPageButton = document.getElementById('searchPageButton');
const deleteBtn = document.getElementsByClassName('delete-btn')[0]; // 取得刪除按鈕元素

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

h3.textContent = article.title;
p.textContent = article.content;
li.appendChild(h3);
li.appendChild(p);
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

function showDeleteButton() {
deleteBtn.style.display = 'block';
}

function hideDeleteButton() {
deleteBtn.style.display = 'none';
}

// 檢查cookie，如果是"True"則顯示刪除按鈕
document.addEventListener('DOMContentLoaded', function() {
var loginValue = getCookieValue("admin");
if (loginValue === "True") {
showFlag();
showDeleteButton(); // 顯示刪除按鈕
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
