const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");

const fetchUsersBtn = document.getElementById('fetch-users');
const userList = document.getElementById('user-list');
// const allowTest1Btn = document.getElementById('start-test1');
// const closeTest1Btn = document.getElementById('close-test1');
// const getResultsBtn = document.getElementById('get-results');
// const getPollResultsBtn = document.getElementById('get-poll-results');
// const resultList = document.getElementById('result-list');

const surveyButton = document.getElementById('survey1');

// const testStatusList = document.getElementById('test-status');

// const settedTime1 = document.getElementById('time-set1');
// const settedTime2 = document.getElementById('time-set2');
// const settedTime3 = document.getElementById('time-set3');
// const settedTime4 = document.getElementById('time-set4');
// const settedTime5 = document.getElementById('time-set5');
// const settedTime6 = document.getElementById('time-set6');
// const settedTime7 = document.getElementById('time-set7');
// const settedTime8 = document.getElementById('time-set8');
// const settedTime9 = document.getElementById('time-set9');
// const settedTime10 = document.getElementById('time-set10');

const idCardForm = document.getElementById('id-card-form');
const findByIdBtn = document.getElementById('find-by-id-btn');
const idCard = document.getElementById('id-card');
const stageList = document.getElementById('stage-list')

idCardForm.addEventListener("submit", async (e) => {
  idCard.value = idCard.value.toLowerCase();
  e.preventDefault();
  const response = await fetch(`/idCardResults/card${idCard.value}`);
  const idCardResults = await response.json();
  const userResponce = await fetch(`/users/id${idCard.value}`);
  const user = await userResponce.json();
  const email = user.email;
  const name = user.name;
  const surname = user.surname;

  stageList.innerHTML = '';

  const idLi = document.createElement('li');
  idLi.textContent = "ID: " + idCard.value;
  const emailLi = document.createElement('li');
  emailLi.textContent = "Email: " + email;
  const nameLi = document.createElement('li');

  nameLi.textContent = "Имя: " + name + " " + surname;
  stageList.appendChild(idLi);
  stageList.appendChild(emailLi);
  stageList.appendChild(nameLi);

  idCardResults.stages.forEach(stage => {

    const form = document.createElement('form');
    const li = document.createElement('li');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'admin-btn');
    button.textContent = "Изменить";

    const updateResult = document.createElement('input');
    updateResult.setAttribute('id', "update-button");
    updateResult.setAttribute('type', "text");
    form.onsubmit = async function(e) {
      e.preventDefault();
      if((updateResult.value != "") && (Number(updateResult.value) || Number(updateResult.value) === 0)){
        console.log("change");
      await fetch(`/stages/update`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_card_results: idCardResults._id, stage_id: stage._id, newResult: updateResult.value})
      });
      findByIdBtn.click();
      }
    }
    li.textContent = stage.name + ": " + stage.result;
    //li.appendChild(document.createTextNode(stage.name + ": " + stage.result));
    form.appendChild(updateResult);
    form.appendChild(button);
    li.appendChild(form);
    stageList.append(li);
    stageList.append(br);
  });
});


fetchUsersBtn.addEventListener('click', async () => {
  const response = await fetch('/users');
  const users = await response.json();
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.name} ${user.surname} E-mail: ${user.email} (Админ: ${user.isAdmin ? "Да" : "Нет"})`;
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

if(email === "reloader@refor.by"){
  setInterval(() => {
    location.reload();
  }, 1 * 60 * 1000);
}

// async function setTime(id, thisValue) {

//   const timeValue = thisValue;
//   res = await fetch('/setTime', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({'time': timeValue, 'id': id})
//   });
// }



// async function start(number) {
//   res = await fetch(`/allowTest/${number}`, { method: 'POST' });
//   refreshStatusList();
// }

// async function close_test(number) {
//   res = await fetch(`/closeTest/${number}`, { method: 'POST' });
//   refreshStatusList();
// }

// getResultsBtn.addEventListener('click', async () => {
//   location.assign("/download-excel");
// })

// getPollResultsBtn.addEventListener('click', async() => {
//   location.assign("/download-poll-results");
// })

// async function createStatusList() {
//   const response = await fetch('/is-available');
//   const isAvailable = await response.json();

//   for (let i = 0; i < isAvailable.length; ++i) {
//     const li = document.createElement('li');
//     li.textContent = `тест ${i + 1}`;
//     if (isAvailable[i]) {
//       li.style.color = 'green';
//     }
//     else {
//       li.style.color = 'red';
//     }
//     testStatusList.appendChild(li);
//   }
// }

// async function refreshStatusList() {
//   const response = await fetch('/is-available');
//   const isAvailable = await response.json();

//   testStatusCollection = testStatusList.getElementsByTagName('li')

//   for (let i = 0; i < testStatusCollection.length; ++i) {
//     if (isAvailable[i]) {
//       testStatusCollection[i].style.color = 'green';
//     } else {
//       testStatusCollection[i].style.color = 'red';
//     }
//   }
// }

// async function refreshTime() {
//   inputs = document.getElementsByTagName('input');
//   const response = await fetch('/opening-time');
//   const openingTime = await response.json();
//   for(let i = 0; i < inputs.length; ++i){
//     inputs[i].value = openingTime[i];
//   }
// }

// refreshTime();
// createStatusList();