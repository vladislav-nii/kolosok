const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");

const map = new Map();
map.set(1, "bgsxa");

backBtn.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/main");
})

async function choosingCategory(number) {
    window.location.href = `https://kolosok.onrender.com/excursion/${map.get(number)}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
