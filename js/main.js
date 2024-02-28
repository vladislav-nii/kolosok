const educationButton = document.getElementById("education_btn");
const excursionButton = document.getElementById("excursion_btn");
const agrotestsButton = document.getElementById("agrotests_btn");
const gamesButton = document.getElementById("games_btn");
const statsButton = document.getElementById("stats_btn");
const aboutButton = document.getElementById("about_btn");
const logoutButton = document.getElementById("logout_btn"); 


educationButton.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/education/");
});

excursionButton.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/excursion/");
});

agrotestsButton.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/categories/");
});

gamesButton.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/games");
});

aboutButton.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/about");
});

logoutButton.addEventListener("click", (ev) => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    location.assign("http://127.0.0.1:5500/login");
});

async function applyStyle() {
    statsButton.style.backgroundImage = 'url(../img/lock3.png)';
    statsButton.style.backgroundRepeat = 'no-repeat';
    statsButton.style.backgroundPosition = 'center center';
    statsButton.style.backgroundAttachments = 'fixed';
    statsButton.style.backgroundSize = 'contain';
    statsButton.style.color = 'rgba(66, 66, 66, 0.4)';
}

applyStyle();