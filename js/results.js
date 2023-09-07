const tableBody = document.getElementById('table-body');
const backButton = document.getElementById('back-to-surveys');


async function onStart() {
    const responce = await fetch('https://kolosok.onrender.com/results');
    const results = await responce.json();

    results.forEach((result) => {
        if (result.email === document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
            var tr = document.createElement('tr');
            tr.setAttribute('role', 'cell');
            tr.innerHTML = `<td role="cell">${result.test_id}</td>
                    <td role="cell">${JSON.parse(result.result)["correct_answers"]}</td>
                    <td role="cell">${JSON.parse(result.result)["no_of_questions"]}</td>
                    <td role="cell">${10}</td>
                    <td role="cell">${result["time"]}</td>`
            tableBody.appendChild(tr);
        }
    });
}

onStart();

backButton.addEventListener('click', () => {
    location.assign("https://kolosok.onrender.com/surveys/");
});