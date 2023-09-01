const survey1 = document.getElementById("survey1");

function test(number) {
    window.location.href = `https://oprosnik.onrender.com/surveys/survey${number}`;
}



function handleMessage(event) {
    alert('message');
    //survey1 = document.getElementById("survey1");
    console.log(survey1);
    survey1.style.borderRadius = '1px'; 


}
window.addEventListener('message', handleMessage);

