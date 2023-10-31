const studiesButton = document.getElementById("studies_btn");
const gameButton = document.getElementById("game_btn");
const statsButton = document.getElementById("stats_btn");
const aboutButton = document.getElementById("about_btn");

studiesButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/categories/");
});

gameButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/game");
});

aboutButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/about");
});