const navbar = document.getElementById("navbar")
const navbar_responsive = document.getElementById("navbar-responsive")
const btn_Open = document.getElementById("icon-hamburger")
const btn_Close = document.getElementById("icon-close")


btn_Open.addEventListener("click", () => {
    navbar.classList.toggle("navbar-responsive")
})
btn_Close.addEventListener("click", ()=>{
    navbar.classList.remove("navbar-responsive")
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove("navbar-responsive")
    }
})