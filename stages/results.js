const tableBody = document.getElementById('table-body');
const backButton = document.getElementById('back-to-surveys');

const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")


async function onStart() {
    const id_card_responce = await fetch(`/idCardResults/milo${email}`);
    const id_card = (await id_card_responce.json()).id_card;
    console.log(id_card);
    const stages_responce = await fetch(`/idCardResults/card${id_card}`);
    const stages = (await stages_responce.json()).stages;

    stages.forEach((stage) => {
        var tr = document.createElement('tr');
        tr.setAttribute('role', 'cell');
        tr.innerHTML = `<td role="cell">${stage.name}</td>
                <td role="cell">${stage.result}</td>`
        tableBody.appendChild(tr);
    });
}

onStart();

backButton.addEventListener('click', () => {
    
    location.assign(`/stages`);
});