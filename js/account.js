const name = document.getElementById('name');
const surname  = document.getElementById('surname');
const patronymic = document.getElementById('patronymic');
const birthDate = document.getElementById('birthdate');
const stateEducationalInstitution = document.getElementById('state-educational-institution');
const faculty = document.getElementById('faculty');
const group = document.getElementById('group');
const email = document.getElementById('email');
const username = document.getElementById('username');

const cookieEmail = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");


async function fillFields(){
    const response = await fetch(`http://127.0.0.1:5500/account-data/${cookieEmail}`);
    response.json().then(result => {
        name.innerText = result.name;
        surname.innerText = result.surname;
        patronymic.innerText = result.patronymic;
        birthDate.innerText = result.birthDate;
        stateEducationalInstitution.innerText = result.stateEducationalInstitution;
        faculty.innerText = result.faculty;
        group.innerText = result.group;
        email.innerText = result.email;
        username.innerText = result.username;
    });
}

fillFields();