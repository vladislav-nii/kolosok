var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var closeBtn = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal() {
    modal.style.display = "block";
}
function openModal2() {
    modal2.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}

function closeModal2() {
    modal2.style.display = "none";
}

// Закрыть модальное окно, если пользователь нажимает вне его области
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}