const educationButton = document.getElementById("education_btn");
const excursionButton = document.getElementById("excursion_btn");
const agrotestsButton = document.getElementById("agrotests_btn");
const pollsButton = document.getElementById("polls_btn");
const gamesButton = document.getElementById("games_btn");
const stagesButton = document.getElementById("stages_btn");
const settingButton = document.getElementById("settings_btn");
const aboutButton = document.getElementById("about_btn");
const logoutButton = document.getElementById("logout_btn");


educationButton.addEventListener("click", (ev) => {
    location.assign("/education/");
});

excursionButton.addEventListener("click", (ev) => {
    location.assign("/excursion/");
});

agrotestsButton.addEventListener("click", (ev) => {
    location.assign("/categories/");
});

pollsButton.addEventListener("click", (ev) => {
    location.assign("/polls");
});

gamesButton.addEventListener("click", (ev) => {
    location.assign("/games");
});

aboutButton.addEventListener("click", (ev) => {
    location.assign("/about");
});

logoutButton.addEventListener("click", (ev) => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    location.assign("/login");
});


//stages go
stagesButton.addEventListener("click", (ev) => {
    location.assign("/stages/");
});

async function applyStyle() {
    //style.backgroundImage = 'url(../img/lock3.png)';
    stagesButton.style.backgroundRepeat = 'no-repeat';
    stagesButton.style.backgroundPosition = 'center center';
    stagesButton.style.backgroundAttachments = 'fixed';
    stagesButton.style.backgroundSize = 'contain';
    //stagesButton.style.color = 'rgba(66, 66, 66, 0.4)';
    settingButton.style.backgroundImage = 'url(../img/lock3.png)';
    settingButton.style.backgroundRepeat = 'no-repeat';
    settingButton.style.backgroundPosition = 'center center';
    settingButton.style.backgroundAttachments = 'fixed';
    settingButton.style.backgroundSize = 'contain';
    settingButton.style.color = 'rgba(66, 66, 66, 0.4)';
}

applyStyle();