const survey1 = document.getElementById("survey1");

function test1(){
    window.location.href = 'http://localhost:5500/surveys/survey1';
}



function handleMessage(event) {
    alert('message');

    if (event.data && event.data.type === 'changeStyle') {
        //alert('message');
        const survey1 = document.getElementById("survey1");
        survey1.style.borderRadius = '0';
    }
   
}
window.addEventListener('message', handleMessage);

