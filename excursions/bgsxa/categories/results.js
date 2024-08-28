const tableBody = document.getElementById('table-body');
const backButton = document.getElementById('back-to-surveys');

const bgsxa_category = document.cookie.replace(/(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")


async function onStart() {
    const responce = await fetch('/results/');
    const results = await responce.json();

    results.forEach((result) => {
        if (result.email === email && result.category === bgsxa_category) {
            var tr = document.createElement('tr');
            tr.setAttribute('role', 'cell');
            tr.innerHTML = `<td role="cell">${result.test_id}</td>
                    <td role="cell">${JSON.parse(result.result)["correct_answers"]}</td>
                    <td role="cell">${JSON.parse(result.result)["no_of_questions"]}</td>
                    <td role="cell">${JSON.parse(result.result)["total"]}</td>
                    <td role="cell">${result["time"]}</td>`
            tableBody.appendChild(tr);
        }
    });
}

onStart();

backButton.addEventListener('click', () => {
    
    if(!bgsxa_category){
        location.assign(`/excursion/bgsxa/`);
    }
    location.assign(`/excursion/bgsxa/${bgsxa_category}`);
});