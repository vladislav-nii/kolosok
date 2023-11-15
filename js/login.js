const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById("loginButton");


loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const response = await fetch('https://kolosok.onrender.com/login', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.email) {
    document.cookie = "email=" + (data.email) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "password=" + (data.password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    if (data.isAdmin) {
      alert('Hello');
      location.assign("https://kolosok.onrender.com/setting");
    }
    else {
      location.assign("https://kolosok.onrender.com/main");
    }

  } else {
    alert("Такого пользователя не существует!");
  }

});


