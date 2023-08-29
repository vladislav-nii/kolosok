const survey1 = document.getElementById("survey1");

function test1() {
    window.location.href = 'https://oprosnik.onrender.com/surveys/survey1';
}



function handleMessage(event) {
    alert('message');

    console.log(survey1);
    survey1.style.borderRadius = '1px';


}
window.addEventListener('message', handleMessage);

