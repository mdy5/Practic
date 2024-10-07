import posts from '../mock/postMock.js';
import users from '../mock/userMock.js';

function getPostById(postId) {
  return posts.find(post => post.id === parseInt(postId));
}

function getUserById(userId) {
  return users.find(user => user.id === userId);
}

function displayPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  const post = getPostById(postId);

  if (post) {
    const user = getUserById(post.authorId);
    document.querySelector('.card-title').textContent = post.title;
    document.querySelector('.card-text').textContent = post.content;
    document.querySelector('.card-subtitle').textContent = `Автор: ${user.name}`;
    document.querySelector('.card-date').textContent = `Дата: ${post.date}`;

    // Отображаем карточку с постом
    document.getElementById('post-card').classList.remove('d-none');
  } else {
    document.querySelector('.card-body').innerHTML = '<p>Post not found.</p>';
  }
}

// Функция для управления спиннером
function toggleSpinner(show) {
  const spinner = document.getElementById('loading-spinner');

  if (show) {
    console.log('Спиннер показывается');
    spinner.classList.remove('d-none'); // Показываем спиннер
    spinner.classList.add('d-flex');    // Добавляем класс d-flex
  } else {
    console.log('Спиннер скрывается');
    spinner.classList.remove('d-flex'); // Удаляем класс d-flex
    spinner.classList.add('d-none');    // Скрываем спиннер
  }
}

// Имитация загрузки данных с задержкой
console.log('Начало загрузки данных...');
toggleSpinner(true);

setTimeout(() => {
  console.log('Загрузка данных завершена, отображаем пост...');
  displayPost();  // Отображаем данные поста
  toggleSpinner(false);  // Отключаем спиннер
}, 2000); // Задержка 2 секунды для имитации загрузки
