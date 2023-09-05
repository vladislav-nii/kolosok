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

// allowTest1Btn.addEventListener('click', async() =>{
//   var message = {
//     type: 'changeStyle',
//         style: 'admin-style'
//   };
//   window.postMessage(message, 'https://kolosok.onrender.com/surveys/');

//   res = await fetch(`/allowTest/${1}`, { method: 'POST' });
// })

// closeTest1Btn.addEventListener('click', async() =>{
//   var message = {
//     type: 'changeStyle',
//         style: 'admin-style'
//   };
//   window.postMessage(message, 'https://kolosok.onrender.com/surveys/');

//   res = await fetch(`/closeTest/${1}`, { method: 'POST' });
//   //console.log(res);
// })

getResultsBtn.addEventListener('click', async() => {
  //const workbook = XLSX.utils.book_new();
  const response = await fetch('https://kolosok.onrender.com/results');
  const results = await response.json();
  const responce2 = await fetch('https://kolosok.onrender.com/users');
  const users = await responce2.json();
  console.log(results);
  resultList.innerHTML = '';
  users.forEach((user) => {
    let correct = 0;
    let total = 0;
    results.forEach((result) => {
      if(result.email === user.email){
        const li = document.createElement('li');
        li.textContent = `почта: ${user.email}, имя пользователя - ${user.username}, тест №${result.test_id} : ${JSON.parse(result.result)["correct_answers"]} из ${JSON.parse(result.result)["no_of_questions"]} за ${result["time"]}с`;
        total += JSON.parse(result.result)["no_of_questions"];
        correct += JSON.parse(result.result)["correct_answers"];
        resultList.appendChild(li);
      }
    });
    // const li = document.createElement('li');
    // li.textContent = `E-mail: ${user.email} : ${correct} из ${total}`;
    //resultList.appendChild(li);
  });
})
