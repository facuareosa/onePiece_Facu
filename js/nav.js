/* TOOGLE "activo" de header__nav al hacer click en header__btn"*/


const button = document.querySelector(".header__btn-svg")
const nav = document.querySelector(".header__nav")

button.addEventListener('click', ()=>{
    nav.classList.toggle("activo");
})
