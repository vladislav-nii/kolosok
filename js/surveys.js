const resultsBtn = document.getElementById('results-btn');

async function test(number) {
    const email = (document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    window.location.href = `https://kolosok.onrender.com/surveys/survey${number}`;
}

resultsBtn.addEventListener('click', () => {
    console.log('click');
    location.assign("https://kolosok.onrender.com/user-results");
})