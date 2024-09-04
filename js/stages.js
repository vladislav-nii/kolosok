const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");
const resultsBtn = document.getElementById('results-btn');
const email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1")


backBtn.addEventListener("click", (ev) => {
    location.assign("/main");
})

async function choosingCategory(number) {
    const response = await fetch(`/idCardResults/milo${email}`);
    const resp = await response.json();
    const id_card = resp.id_card;
    const stageRes = await fetch(`/getStageResult/card-id${id_card}/stage-id${number}`);
    
    const stageResult = await stageRes.json();
    //window.location.href = `/mom/survey${number}`;
    if(!stageResult) {
        console.log("ASdasdasd");
        window.location.href = `/stage/opros${number}`;
    }
};


resultsBtn.addEventListener('click', () => {
    location.assign(`/stages/results`);
})