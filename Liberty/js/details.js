//Preloader
const load = document.querySelector(".load");

window.addEventListener("load", () => {
  load.style.display = "none";
});

//Nav Scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll > 100) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

//Navbar Toggle
const list = document.querySelector("ul");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  list.classList.toggle("toggle");
});
