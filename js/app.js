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



// header
function changeHeaderOpacity() {
  var header = document.getElementById("headerr");
  if (window.pageYOffset > 0) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
}

function downWindow() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function exit() {
  document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "index.html";
}

function isLoggedIn() {
  if (freeLesson) {
    window.location.href = "freeLessons.html";
  } else {
    alert("Зарегистрируйтесь, чтобы получить доступ к бесплатному занятию!");
  }
}

function setting() {
  location.assign("setting.html");
}

function getShedule()
{
  location.assign("shedule.html"); 
}

function getTeachersInfo()
{
  location.assign("aboutTeachers.html"); 
}

function getCoursesInfo()
{
  location.assign("aboutCourses.html");
}

function checkCookie() {
  var username = document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var password = document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  if (username != '' || password != '') {
    async function getData() {
      // const response = await fetch('https://oprosnik.onrender.com/login', {
        const response = await fetch('http://localhost:5500/login', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.isAdmin) {
        // adminPanel.style.display = 'block';
        adminSetting = document.getElementById("admin-setting");
        adminSetting.style.display = 'block';
      } else {

      }
      if (data.username) {
        userGreeting.innerText = `Привет, ${data.username}!`;
        userGreeting.style.display = "inline-block";
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("btn-free").style.display = "block";
        freeLesson = true;
        document.getElementById("btn-free").innerHTML = "Получить прогноз урожайности";
        document.getElementById("btn-any-user").innerHTML = "Получить прогноз урожайности";
      }
      return data;
    }
    getData().then();
  }
}

document.addEventListener("DOMContentLoaded", checkCookie);

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const isAdmin = false;
  //const response = await fetch('https://oprosnik.onrender.com/register', {
    const response = await fetch('http://localhost:5500/register', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, isAdmin, email }),
  });
  const data = await response.json();

 

  if (data.msg) {
    alert(data.msg);
  } else {
    if (data.isAdmin) {
      // adminPanel.style.display = 'block';
      adminSetting = document.getElementById("admin-setting");
      adminSetting.style.display = 'block';
    }

    if (data.username) {
      document.cookie = "login=" + encodeURIComponent(username) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      document.cookie = "password=" + encodeURIComponent(password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      registerForm.style.display = "none";

      userGreeting.innerText = `Привет, ${username}!`;
      userGreeting.style.display = "inline-block";
      document.getElementById("loginButton").style.display = "none";
      freeLesson = true;
      document.getElementById("btn-free").innerHTML = "Получить прогноз урожайности";
    } else {
      alert("Такого пользователя не существует!");
    }

  }
});

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
  if (data.isAdmin) {
    // adminPanel.style.display = 'block';
    adminSetting = document.getElementById("admin-setting");
    adminSetting.style.display = 'block';
  }
  if (data.username) {
    document.cookie = "login=" + encodeURIComponent(username) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "password=" + encodeURIComponent(password) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    userGreeting.innerText = `Привет, ${username}!`;
    userGreeting.style.display = "inline-block";
    document.getElementById("loginButton").style.display = "none";
    freeLesson = true;
    document.getElementById("btn-free").innerHTML = "Получить прогноз урожайности";
  } else {
    alert("Такого пользователя не существует!");
  }
});


