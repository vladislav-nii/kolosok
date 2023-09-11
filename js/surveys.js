const resultsBtn = document.getElementById('results-btn');
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
    const email = (document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    window.location.href = `https://kolosok.onrender.com/surveys/survey${number}`;
}

resultsBtn.addEventListener('click', () => {
    console.log('click');
    location.assign("https://kolosok.onrender.com/user-results");  
})

async function applyStyle(){
    const response = await fetch('https://kolosok.onrender.com/is-available');
    const isAvailable = await response.json();
    Array.from(surveysBtns).forEach((surveyBtn) => {
        if(!isAvailable[+surveyBtn.id.substring(6) - 1]){
            surveyBtn.style.backgroundImage = 'url(../img/lock2.png)'; 
            surveyBtn.style.backgroundRepeat = 'no-repeat';
            surveyBtn.style.backgroundPosition = 'center center';
            surveyBtn.style.backgroundAttachments = 'fixed';
            surveyBtn.style.backgroundSize = 'contain';
            surveyBtn.style.color = 'rgba(66, 66, 66, 0)';
        } else {
            surveyBtn.style.backgroundImage = '';
            surveyBtn.style.color = 'rgba(66, 66, 66, 1)';
        }
    });
}

applyStyle();