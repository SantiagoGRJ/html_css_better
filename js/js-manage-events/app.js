const btn = document.getElementById("btn")


// Let btn listen for click 

btn.addEventListener("click", function () {
    const text = document.getElementById("demo")
    text.innerHTML = "Clicked!"
})

/* EXERCISE two */

const test = document.getElementById("test")
const remove = document.getElementById("remove")
const add = document.getElementById("add")
let demoo = document.getElementById("demoo")

function myFunction() {
    demoo.innerHTML += "Hello!"
}

/** Let add listen for click */
add.addEventListener("click", function () {
    // Let test listen for click
    test.addEventListener("click", myFunction)
})

// Let remove listen for click
remove.addEventListener("click", function () {
    //Prevent test from listen for click
    test.removeEventListener("click", myFunction)
})

/** EXERCISE THREE */

const link = document.getElementById("link")
const demooo = document.getElementById("demooo")
// Let link listen for click

link.addEventListener("click", function (event) {
    event.preventDefault()
    demooo.innerHTML = "Link blocked!"

})