const navbar = document.getElementById("navbar")
const btn_open = document.getElementById("btn-menu")
const btn_close = document.getElementById("btn-close")


btn_open.addEventListener("click", () => {
    navbar.classList.toggle("navbar-responsive")
})
btn_close.addEventListener("click", () => {
    navbar.classList.remove("navbar-responsive")
})

navbar.addEventListener("click", function (event){
    if(event.target ===navbar){
        navbar.classList.remove("navbar-responsive")
    }
})
