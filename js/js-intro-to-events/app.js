const element = document.getElementById("test-js")

const btn = document.getElementById("myBtn")
const demo_test = document.getElementById("demo-test")

function displayDate(){
    element.innerHTML=Date ()
}

btn.addEventListener("click", function () {
    demo_test.innerHTML=Date ()
})
