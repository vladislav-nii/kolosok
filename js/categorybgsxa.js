const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");

const map = new Map();
map.set(1, "general_information_and_history");
map.set(2, "faculties_and_education");

backBtn.addEventListener("click", (ev) => {
    location.assign("https://kolosok.onrender.com/excursion");
})

async function choosingCategory(number) {
    window.location.href = `https://kolosok.onrender.com/excursion/bgsxa/${map.get(number)}`;
    document.cookie = "bgsxa_category=" + (map.get(number)) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}