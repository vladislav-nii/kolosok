const surveyButton = document.getElementById("group_survey");
const studiesButton = document.getElementById("studies");
const gameButton = document.getElementById("game");
const statsButton = document.getElementById("stats");
const developersButton = document.getElementById("developers");

gameButton.addEventListener("click", (ev) => {
    location.assign("http://localhost:5500/game");
});