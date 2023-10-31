const resultsBtn = document.getElementById('results-btn');
const backBtn = document.getElementById('categories-btn');

const surveysBtns = document.getElementsByClassName('grid-item');

//const eventSource = new EventSource('/send-event');
//const eventSource = new EventSource('');

setInterval(() => {
    applyStyle();
}, 5 * 1000);

// eventSource.addEventListener('update', function(event) {
//   const eventData = JSON.parse(event.data);
//   // Обработка события обновления страницы
//   console.log(eventData.message);
//   //location.reload(); // Обновление страницы
//   applyStyle();
// });

async function test(number) {
    //window.location.href = `https://kolosok.onrender.com/surveys/survey${number}`;
    category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(category_id);
    window.location.href = `https://kolosok.onrender.com/categories/category${category_id}/survey${number}`;
}

resultsBtn.addEventListener('click', () => {
    location.assign("https://kolosok.onrender.com/user-results");  
})

backBtn.addEventListener('click', () => {
    location.assign("https://kolosok.onrender.com/categories");  
})

async function applyStyle(){
    const response = await fetch('https://kolosok.onrender.com/is-available');
    const response2 = await fetch('https://kolosok.onrender.com/opening-time');
    const isAvailable = await response.json();
    const openingTime = await response2.json();
    Array.from(surveysBtns).forEach((surveyBtn) => {
        const btn = surveyBtn.getElementsByTagName('button').item(0);
        const id = +btn.id.substring(6) - 1;
        const label = surveyBtn.getElementsByTagName('label').item(0);
        if(!isAvailable[id]){
            btn.style.backgroundImage = 'url(../img/lock3.png)'; 
            btn.style.backgroundRepeat = 'no-repeat';
            btn.style.backgroundPosition = 'center center';
            btn.style.backgroundAttachments = 'fixed';
            btn.style.backgroundSize = 'contain';
            btn.style.color = 'rgba(66, 66, 66, 0)';

            const dateNow = Date.now();
            label.innerText = openingTime[id];
            label.style.visibility = 'visible';
        } else {
            btn.style.backgroundImage = '';
            btn.style.color = 'rgba(66, 66, 66, 1)';

            label.style.visibility = 'hidden';
        }
    });
}

applyStyle();