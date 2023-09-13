const tableBody = document.getElementById('table-body');
const backButton = document.getElementById('back-to-surveys');


async function onStart() {
    const responce = await fetch('http://127.0.0.1:5500/results');
    const results = await responce.json();

    results.forEach((result) => {
        if (result.email === document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
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
    id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(!id){
        location.assign(`http://127.0.0.1:5500/categories/`);
    }
    location.assign(`http://127.0.0.1:5500/categories/category${id}`);
});