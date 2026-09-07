console.log("JS LOADED");

const burger = document.querySelector(".burgertoggle");
const nav = document.querySelector(".navlink");
burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});






