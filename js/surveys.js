const survey1 = document.getElementById("survey1");

async function test(number) {
    //window.location.href = `https://kolosok.onrender.com/surveys/survey${number}`;
    const email = (document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
    const response = await fetch(`/surveys/survey${number}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
    const res = await response.json();
    if(res.answer){
        window.location.href = `https://kolosok.onrender.com/surveys/survey${number}`;
    }
    else{
        await fetch(`/surveys/`, { method: 'GET' });
    }
}



function handleMessage(event) {
    alert('message');
    //survey1 = document.getElementById("survey1");
    console.log(survey1);
    survey1.style.borderRadius = '1px'; 


}
window.addEventListener('message', handleMessage);

