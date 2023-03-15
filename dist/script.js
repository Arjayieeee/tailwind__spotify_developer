const menu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav ul");

menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    headernav.classList.toggle("open");
    headernav.style=("transition: .5s ease")
    // bg.classList.toggle("open");
})
