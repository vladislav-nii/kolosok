const educationButton = document.getElementById("education_btn");
const excursionButton = document.getElementById("excursion_btn");
const agrotestsButton = document.getElementById("agrotests_btn");
const pollsButton = document.getElementById("polls_btn");
const gamesButton = document.getElementById("games_btn");
const statsButton = document.getElementById("stats_btn");
const settingButton = document.getElementById("settings_btn");
const aboutButton = document.getElementById("about_btn");
const logoutButton = document.getElementById("logout_btn"); 


educationButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/education/");
});

excursionButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/excursion/");
});

agrotestsButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/categories/");
});

pollsButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/polls");
});

gamesButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/games");
});

aboutButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/about");
});

logoutButton.addEventListener("click", (ev) => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    location.assign("https://kolosok.onrender.com/login");
});

async function applyStyle() {
    statsButton.style.backgroundImage = 'url(../img/lock3.png)';
    statsButton.style.backgroundRepeat = 'no-repeat';
    statsButton.style.backgroundPosition = 'center center';
    statsButton.style.backgroundAttachments = 'fixed';
    statsButton.style.backgroundSize = 'contain';
    statsButton.style.color = 'rgba(66, 66, 66, 0.4)';
    settingButton.style.backgroundImage = 'url(../img/lock3.png)';
    settingButton.style.backgroundRepeat = 'no-repeat';
    settingButton.style.backgroundPosition = 'center center';
    settingButton.style.backgroundAttachments = 'fixed';
    settingButton.style.backgroundSize = 'contain';
    settingButton.style.color = 'rgba(66, 66, 66, 0.4)';
}

applyStyle();