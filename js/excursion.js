const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");

const map = new Map();
map.set(1, "bgsxa");

backBtn.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/main");
})

async function choosingCategory(number) {
    window.location.href = `http://127.0.0.1:5500/excursion/${map.get(number)}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
