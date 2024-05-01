const articleList = document.getElementById('article-list');
const flag = document.getElementById('flag');
const welcomeMessage = document.getElementById('welcomeMessage'); // 新增歡迎訊息的元素
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
    welcomeMessage.classList.remove('hidden'); // 顯示歡迎訊息
    setTimeout(() => {
      flag.classList.add('hidden');
      welcomeMessage.classList.add('hidden'); // 隱藏歡迎訊息
    }, 3000);
    setLoginCookie("True"); // 設置 Cookie 為 True
  }
}

homeButton.addEventListener('click', () => {
  // Redirect to home page
  window.location.href = 'index.html';
});

searchPageButton.addEventListener('click', () => {
  // Redirect to search page
  window.location.href = 'search.html';
});

function setLoginCookie(value) {
  document.cookie = "admin=" + value;
}
