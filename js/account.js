const idCard = document.getElementById('id-card');
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
    const response = await fetch(`/account-data/${cookieEmail}`);
    response.json().then(result => {
        idCard.innerText = result.id_card;
        name.innerText = result.name;
        surname.innerText = result.surname;
        //patronymic.innerText = result.patronymic;
        birthDate.innerText = result.birthDate;
        //stateEducationalInstitution.innerText = result.stateEducationalInstitution;
        //faculty.innerText = result.faculty;
        //group.innerText = result.group;
        email.innerText = result.email;
        //username.innerText = result.username;
    });
}

fillFields();