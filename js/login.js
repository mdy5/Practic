import users from '../mock/userMock.js';

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Проверка пользователя по email
  const user = users.find(user => user.email === email);

  if (user) {
    // Проверка пароля
    if (user.password === password) {
      // Сохранить состояние авторизации (в реальном приложении это было бы через API или сессии)
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'catalog.html';
    } else {
      alert('Wrong password');
    }
  } else {
    alert('User not found');
  }
});
