const navbar = document.getElementById("navbar")
const btn_open = document.getElementById("btn-open-menu")
const btn_close = document.getElementById("btn-close-menu")

btn_open.addEventListener("click", () => {
    navbar.classList.toggle("navbar-responsive")
})
btn_close.addEventListener("click", () => {
    navbar.classList.remove("navbar-responsive")
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        navbar.classList.remove("navbar-responsive")
    }
})
navbar.addEventListener("click", (event) => {
    if(event.target == navbar){ 
        navbar.classList.remove("navbar-responsive")
    }
})