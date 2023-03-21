const toggleMenu2 = document.querySelector(".toggle__menu2");
const headerNav2 = document.querySelector(".navigation ul");
toggleMenu2.addEventListener("click", () => {
  toggleMenu2.classList.toggle("open");
  headerNav2.classList.toggle("open");
  headerNav2.style=("transition: 300ms");
});
