//const { response } = require("express");
//const XLSX = require('xlsx');

const fetchUsersBtn = document.getElementById('fetch-users');
const userList = document.getElementById('user-list');
const allowTest1Btn = document.getElementById('start-test1');
const closeTest1Btn = document.getElementById('close-test1');
const getResultsBtn = document.getElementById('get-results');
const resultList = document.getElementById('result-list');

const surveyButton = document.getElementById('survey1');


async function start(number){

  res = await fetch(`/allowTest/${number}`, { method: 'POST' });
}

async function close_test(number){

  res = await fetch(`/closeTest/${number}`, { method: 'POST' });
  
}

setInterval(() => {
  location.reload();
}, 1 * 10 * 1000); // 5 минут

fetchUsersBtn.addEventListener('click', async () => {
  const response = await fetch('https://kolosok.onrender.com/users');
  const users = await response.json();
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.username} E-mail: ${user.email} (Админ: ${user.isAdmin})`;
    li.setAttribute('id', 'eachUser');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.setAttribute('id', "delete-button");
    deleteBtn.addEventListener('click', async () => {
      await fetch(`/users/${user._id}`, { method: 'DELETE' });
      li.remove();
    });
    li.appendChild(deleteBtn);
    userList.appendChild(li);
  }); 
});

getResultsBtn.addEventListener('click', async() => {
  location.assign("https://kolosok.onrender.com/download-excel");
})
