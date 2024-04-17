const resultsBtn = document.getElementById('results-btn');
const backBtn = document.getElementById('categories-btn');

const surveysBtns = document.getElementsByClassName('grid-item');
//const bgsxa_category = document.cookie.replace(/(?:(?:^|.*;\s*)bgsxa_category\s*\=\s*([^;]*).*$)|^.*$/, "$1");

async function test(number) {
    window.location.href = `https://kolosok.onrender.com/polls/poll${number}`;
}

resultsBtn.addEventListener('click', () => {
    location.assign(`https://kolosok.onrender.com/polls/${bgsxa_category}/results`);
});

backBtn.addEventListener('click', () => {
    location.assign("https://kolosok.onrender.com/main"); 
});
