const articleList = document.getElementById('article-list');
const homeButton = document.getElementById('homeButton');
const searchPageButton = document.getElementById('searchPageButton');

const articles = [
  { id: 1, title: '示例文章', content: '這是一篇示例文章。' }
];

// 獲取 cookie 值
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// 檢查 cookie 值
const adminCookie = getCookie('admin');

function renderArticleList() {
  articleList.innerHTML = '';
  for (const article of articles) {
    renderArticle(article);
  }

  // 檢查是否需要顯示 flag
  if (articles.length === 0 && adminCookie === 'True') {
    showFlag();
  }
}

function renderArticle(article) {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  h3.textContent = article.title;
  p.textContent = article.content;

  li.appendChild(h3);
  li.appendChild(p);

  // 根據 cookie 值決定是否添加刪除按鈕
  if (adminCookie === 'True') {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '刪除';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => handleDeleteClick(article.id);
    li.appendChild(deleteBtn);
  }

  articleList.appendChild(li);
}

function handleDeleteClick(id) {
  const articleIndex = articles.findIndex(article => article.id === id);
  if (articleIndex !== -1) {
    articles.splice(articleIndex, 1);
    renderArticleList();
  }
}

function showFlag() {
  const flagLi = document.createElement('li');
  flagLi.textContent = '歡迎登入 : admin';
  flagLi.style.backgroundColor = '#4CAF50';
  flagLi.style.color = 'white';
  flagLi.style.padding = '10px';
  articleList.appendChild(flagLi);
}

renderArticleList();

homeButton.addEventListener('click', () => {
  // Redirect to home page
  window.location.href = 'home.html';
});

searchPageButton.addEventListener('click', () => {
  // Redirect to search page
  window.location.href = 'search.html';
});

if (adminCookie === 'True') {
  // 更改標題
  document.querySelector('h1').textContent = '我的貼文';
}
