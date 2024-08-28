const backBtn = document.getElementById("back");
const gameButtons = document.getElementsByClassName("grid-item");

backBtn.addEventListener("click", (ev) => {
    location.assign("/main");
})

var map = new Map();
map.set(1, "harvest")

async function choosingCategory(number) {
    window.location.href = `/games/${map.get(number)}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

Array.from(gameButtons).forEach((gameButton) => {
    if(gameButton != gameButtons[0]){
        gameButton.style.backgroundImage = 'url(../img/lock3.png)'; 
        gameButton.style.backgroundRepeat = 'no-repeat';
        gameButton.style.backgroundPosition = 'center center';
        gameButton.style.backgroundAttachments = 'fixed';
        gameButton.style.backgroundSize = 'contain';
        gameButton.style.color = 'rgba(66, 66, 66, 0.4)';
    }
});