const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const adminPanel = document.getElementById('admin-panel');
const userList = document.getElementById('user-list');
const registrationButton = document.getElementById("registrationButton");
const loginButton = document.getElementById("loginButton");
const userGreeting = document.getElementById("userGreeting");
const saltRounds = 3;
const adminLogin = "vika";
const adminPassword = "vikavika";
var freeLesson = false;
const freeLessonsBtn = document.getElementById("btn-free");



// function checkCookie() {
//   var username = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//   var password = document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1");

//   if (username != '' || password != '') {
//     async function getData() {
//        const response = await fetch('/login', {
//         //const response = await fetch('/login', {

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

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if(document.getElementById('checkboxPrivace').checked) {
  const email = document.getElementById('register-email').value;
  //const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const name = document.getElementById('register-name').value;
  const surname = document.getElementById('register-surname').value;
  //const patronymic = document.getElementById('register-patronymic').value;
  const birthDate = document.getElementById('register-birthdate').value;
  //const stateEducationalInstitution = document.getElementById('register-state-educational-institution').value;
  //const faculty = document.getElementById('register-faculty').value;
  //const group = document.getElementById('register-group').value;
  const isAdmin = false;

  const creation_date = new Date();
  const response = await fetch('/register', {
 // const response = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, isAdmin, email, name, surname, birthDate, creation_date}),
  });
  const data = await response.json();
  if (data.msg) {
    alert(data.msg);
  } else {
    if (data.isAdmin) {
      // adminPanel.style.display = 'block';
      adminSetting = document.getElementById("admin-setting");
      adminSetting.style.display = 'block';
    } else {
      location.assign("/main");
    }

    if (data.email) {
      document.cookie = "email=" + (data.email) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      document.cookie = "password=" + (data.password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    } else {
      alert("Такого пользователя не существует!");
    }

  }
}
});





