import posts from '../mock/postMock.js';

function displayPosts() {
  console.log('Отображение постов началось'); // Отладочное сообщение

  const postList = document.getElementById('post-list');
  postList.innerHTML = ''; // Очищаем список на случай повторной загрузки
  posts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.classList.add('col-md-4', 'mb-4');

    postCard.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.content.slice(0, 40)}...</p>
          <a href="post.html?id=${post.id}" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
    `;

    postList.appendChild(postCard);
  });

  console.log('Посты отображены'); // Отладочное сообщение

  // Отображение заголовка и кнопки авторизации после отображения постов
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.classList.remove('d-none');
    console.log('Заголовок отображен'); // Отладочное сообщение
  } else {
    console.log('Элемент с идентификатором post-title не найден'); // Отладочное сообщение

  console.log('Заголовок и кнопка авторизации отображены'); // Отладочное сообщение
}
// Отображение нового элемента после отображения постов
const newElement = document.getElementById('auth-button-container');
if (newElement) {
  newElement.classList.remove('d-none');
  console.log('Новый элемент отображен'); // Отладочное сообщение
} else {
  console.log('Элемент с идентификатором new-element не найден'); // Отладочное сообщение
}

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) {
    const authButtonContainer = document.getElementById('auth-button-container');
    const authButton = document.createElement('a');
    authButton.href = 'login.html';
    authButton.classList.add('btn', 'btn-primary');
    authButton.textContent = 'Login';
    authButtonContainer.appendChild(authButton);
    console.log('Кнопка авторизации отображена'); // Отладочное сообщение
  } else {
    console.log('Пользователь авторизован, кнопка авторизации не нужна');
  }

if (!loggedInUser) {
  console.log('Пользователь не авторизован, добавляем кнопку авторизации');
} else {
  console.log('Пользователь авторизован, кнопка авторизации не нужна');
}
}

function toggleSpinner(show) {
  const spinner = document.getElementById('loading-spinner');
  const postList = document.getElementById('post-list');

  if (show) {
    console.log('Спиннер показывается'); // Отладочное сообщение
    spinner.classList.remove('d-none'); // Показываем спиннер
    spinner.classList.add('d-flex');   // Добавляем класс d-flex
    postList.classList.add('d-none');   // Скрываем список постов
  } else {
    console.log('Спиннер скрывается'); // Отладочное сообщение
    spinner.classList.remove('d-flex'); // Удаляем класс d-flex
    spinner.classList.add('d-none');    // Скрываем спиннер
    postList.classList.remove('d-none'); // Показываем список постов
    console.log('Классы элементов после выполнения функции:');
    console.log('loading-spinner:', spinner.classList);
    console.log('post-list:', postList.classList);
  }
  if (spinner) {
    // ...
  } else {
    console.log('Элемент с идентификатором loading-spinner не найден'); // Отладочное сообщение
  }
}

// Имитация загрузки данных с задержкой
console.log('Начало загрузки данных...');
toggleSpinner(true);
setTimeout(() => {
  console.log('Загрузка данных завершена, отображаем посты...');
  displayPosts();
  toggleSpinner(false);  // Отключаем спиннер
}, 2000); // Задержка 2 секунды для имитации загрузки


