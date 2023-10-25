async function choosingCategory(number) {
    window.location.href = `http://localhost:5500/categories/category${number}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
