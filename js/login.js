const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById("loginButton");


// function checkCookie() {
//   var username = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//   var password = document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1");

//   if (username != '' || password != '') {
//     async function getData() {
//        const response = await fetch('https://oprosnik.onrender.com/login', {
//         //const response = await fetch('http://localhost:5500/login', {

//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();

//       if (data.isAdmin) {
//         // adminPanel.style.display = 'block';
//         adminSetting = document.getElementById("admin-setting");
//         adminSetting.style.display = 'block';
//       } else {

//       }
//       if (data.username) {
//         userGreeting.innerText = `Привет, ${data.username}!`;
//         userGreeting.style.display = "inline-block";
//         document.getElementById("loginButton").style.display = "none";
//         document.getElementById("btn-free").style.display = "block";
//         freeLesson = true;
//         document.getElementById("btn-free").innerHTML = "Получить прогноз урожайности";
//         document.getElementById("btn-any-user").innerHTML = "Получить прогноз урожайности";
//       }
//       return data;
//     }
//     getData().then();
//   }
// }

// document.addEventListener("DOMContentLoaded", checkCookie);


loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  //const response = await fetch('https://oprosnik.onrender.com/login', {
  const response = await fetch('http://localhost:5500/login', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.username) {
    document.cookie = "login=" + encodeURIComponent(username) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "password=" + encodeURIComponent(password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    if (data.isAdmin) {
      alert('Hello');
      location.assign("http://localhost:5500/setting");
    }
    else {
      location.assign("http://localhost:5500/surveys");
    }

  } else {
    alert("Такого пользователя не существует!");
  }

});


