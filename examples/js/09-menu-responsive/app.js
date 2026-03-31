const navbar = document.getElementById("navbar")
const btn_open = document.getElementById("hamburger-menu")
const btn_close = document.getElementById("close-menu")

btn_open.addEventListener("click", () => {
    navbar.classList.toggle("navbar-responsive")
})
btn_close.addEventListener("click", () => {
    navbar.classList.remove("navbar-responsive")
})



window.addEventListener("resize", () => {
    if(window.innerWidth > 500){
        navbar.classList.remove("navbar-responsive")
    }
})