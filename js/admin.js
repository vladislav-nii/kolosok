//const { response } = require("express");

const fetchUsersBtn = document.getElementById('fetch-users');
const userList = document.getElementById('user-list');
const allowTest1Btn = document.getElementById('start-test1');
const closeTest1Btn = document.getElementById('close-test1');

const surveyButton = document.getElementById('survey1');


fetchUsersBtn.addEventListener('click', async () => {
  const response = await fetch('https://oprosnik.onrender.com/users');
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

allowTest1Btn.addEventListener('click', async() =>{
  var message = {
    type: 'changeStyle',
        style: 'admin-style'
  };
  window.postMessage(message, 'https://oprosnik.onrender.com/surveys/');

  res = await fetch(`/allowTest/${1}`, { method: 'POST' });
})

closeTest1Btn.addEventListener('click', async() =>{
  var message = {
    type: 'changeStyle',
        style: 'admin-style'
  };
  window.postMessage(message, 'https://oprosnik.onrender.com/surveys/');

  res = await fetch(`/closeTest/${1}`, { method: 'POST' });
  alert(res);
})
