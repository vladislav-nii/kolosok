const backBtn = document.getElementById("back");
const categoriesButtons = document.getElementsByClassName("grid-item");

backBtn.addEventListener("click", (ev) => {
    location.assign("http://127.0.0.1:5500/main");
})

async function choosingCategory(number) {
    window.location.href = `http://127.0.0.1:5500/categories/category${number}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

async function applyStyle(){
    Array.from(categoriesButtons).forEach((categoriesButton) => {
        const btn = categoriesButton;
        const id = +btn.id.substring(8);
        if(id > 1){
            btn.style.backgroundImage = 'url(../img/lock3.png)'; 
            btn.style.backgroundRepeat = 'no-repeat';
            btn.style.backgroundPosition = 'center center';
            btn.style.backgroundAttachments = 'fixed';
            btn.style.backgroundSize = 'contain';
            btn.style.color = 'rgba(66, 66, 66, 0.4)';
        } else {
            btn.style.backgroundImage = '';
            btn.style.color = 'rgba(66, 66, 66, 1)';
        }
    });
}

applyStyle();