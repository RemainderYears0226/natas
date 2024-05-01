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
  window.location.href = 'index.html';
});

searchPageButton.addEventListener('click', () => {
  // Redirect to search page
  window.location.href = 'search.html';
});

// Check if cookie value is "True" to show admin message and delete button
document.addEventListener('DOMContentLoaded', function() {
  var cookieValue = getCookieValue("admin");
  if (cookieValue === "True") {
    showAdminMessage();
    showDeleteButtons();
  }
});

function showAdminMessage() {
  var adminMessage = document.createElement('div');
  adminMessage.textContent = "歡迎登入：admin";
  document.body.appendChild(adminMessage);
}

function showDeleteButtons() {
  var deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.style.display = 'block';
  });
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
