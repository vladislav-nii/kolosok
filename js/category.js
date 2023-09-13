async function choosingCategory(number) {
    window.location.href = `https://kolosok.onrender.com/categories/category${number}`;
    document.cookie = "category_id=" + (number) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}
