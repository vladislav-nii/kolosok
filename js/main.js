const studiesButton = document.getElementById("studies_btn");
const gameButton = document.getElementById("game_btn");
const statsButton = document.getElementById("stats_btn");
const aboutButton = document.getElementById("about_btn");
const logoutButton = document.getElementById("logout_btn"); 

studiesButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/categories/");
});

gameButton.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/game");
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
}

applyStyle();