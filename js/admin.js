const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");

const fetchUsersBtn = document.getElementById('fetch-users');
const userList = document.getElementById('user-list');
const allowTest1Btn = document.getElementById('start-test1');
const closeTest1Btn = document.getElementById('close-test1');
const getResultsBtn = document.getElementById('get-results');
const getPollResultsBtn = document.getElementById('get-poll-results');
const resultList = document.getElementById('result-list');

const surveyButton = document.getElementById('survey1');

const testStatusList = document.getElementById('test-status');

const settedTime1 = document.getElementById('time-set1');
const settedTime2 = document.getElementById('time-set2');
const settedTime3 = document.getElementById('time-set3');
const settedTime4 = document.getElementById('time-set4');
const settedTime5 = document.getElementById('time-set5');
const settedTime6 = document.getElementById('time-set6');
const settedTime7 = document.getElementById('time-set7');
const settedTime8 = document.getElementById('time-set8');
const settedTime9 = document.getElementById('time-set9');
const settedTime10 = document.getElementById('time-set10');

const idCardForm = document.getElementById('id-card-form');
const idCard = document.getElementById('id-card');
const stageList = document.getElementById('stage-list')

idCard.value = 'value';

idCardForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(idCard.value);
  const response = await fetch(`/idCardResults/card${idCard.value}`);
  const idCardResults = await response.json();
  stageList.innerHTML = '';

  idCardResults.stages.forEach(stage => {

    const form = document.createElement('form');
    const li = document.createElement('li');

    const updateResult = document.createElement('input');
    updateResult.setAttribute('id', "update-button");
    updateResult.setAttribute('type', "text");
    form.onsubmit = async function(e) {
      e.preventDefault();
      console.log("change");
      await fetch(`/stages/update`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_card_results: idCardResults._id, stage_id: stage._id, newResult: updateResult.value})
      });
      idCardForm.submit();
    }
    li.textContent = stage.name + ": " + stage.result;
    //li.appendChild(document.createTextNode(stage.name + ": " + stage.result));
    form.appendChild(updateResult);
    li.appendChild(form);
    stageList.append(li);
  });
});


fetchUsersBtn.addEventListener('click', async () => {
  const response = await fetch('/users');
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

async function setTime(id, thisValue) {

  const timeValue = thisValue;
  res = await fetch('/setTime', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'time': timeValue, 'id': id})
  });
}



async function start(number) {
  res = await fetch(`/allowTest/${number}`, { method: 'POST' });
  refreshStatusList();
}

async function close_test(number) {
  res = await fetch(`/closeTest/${number}`, { method: 'POST' });
  refreshStatusList();
}

if(email === "reloader@refor.by"){
  setInterval(() => {
    location.reload();
  }, 1 * 60 * 1000);
}

fetchUsersBtn.addEventListener('click', async () => {
  const response = await fetch('/users');
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

getResultsBtn.addEventListener('click', async () => {
  location.assign("/download-excel");
})

getPollResultsBtn.addEventListener('click', async() => {
  location.assign("/download-poll-results");
})

async function createStatusList() {
  const response = await fetch('/is-available');
  const isAvailable = await response.json();

  for (let i = 0; i < isAvailable.length; ++i) {
    const li = document.createElement('li');
    li.textContent = `тест ${i + 1}`;
    if (isAvailable[i]) {
      li.style.color = 'green';
    }
    else {
      li.style.color = 'red';
    }
    testStatusList.appendChild(li);
  }
}

async function refreshStatusList() {
  const response = await fetch('/is-available');
  const isAvailable = await response.json();

  testStatusCollection = testStatusList.getElementsByTagName('li')

  for (let i = 0; i < testStatusCollection.length; ++i) {
    if (isAvailable[i]) {
      testStatusCollection[i].style.color = 'green';
    } else {
      testStatusCollection[i].style.color = 'red';
    }
  }
}

async function refreshTime() {
  inputs = document.getElementsByTagName('input');
  const response = await fetch('/opening-time');
  const openingTime = await response.json();
  for(let i = 0; i < inputs.length; ++i){
    inputs[i].value = openingTime[i];
  }
}

refreshTime();
createStatusList();