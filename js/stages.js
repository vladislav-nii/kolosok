const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");
const resultsBtn = document.getElementById('results-btn');


backBtn.addEventListener("click", (ev) => {
    location.assign("/main");
})

async function choosingCategory(number) {
    window.location.href = `/stages/${number}`;
}


resultsBtn.addEventListener('click', () => {
    location.assign(`/stages/results`);
})