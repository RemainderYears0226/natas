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

// 獲取 cookie 值
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// 檢查 cookie 值
const adminCookie = getCookie('admin');
if (adminCookie === 'True') {
  // 顯示懸浮視窗
  flag.classList.remove('hidden');

  // 顯示刪除按鈕
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => btn.style.display = 'block');

  // 更改標題
  document.querySelector('h1').textContent = '我的貼文';
}
