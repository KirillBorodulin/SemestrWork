const btn = document.getElementById("navbar-toggler");//выбрать элемент кнопку
const menus = document.querySelectorAll(".menu");//выбрать все меню
btn.addEventListener('click', () => {//когда пользователь кликнет по кнопке
    for (let el of menus) {//перебрать все меню и к каждому
        el.classList.toggle("show");//применить убрать стиль show
    }
})

