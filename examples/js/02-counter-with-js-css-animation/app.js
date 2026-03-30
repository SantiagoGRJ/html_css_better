let warning = document.getElementById("warning")
let counter = document.getElementById("count")


let count = 0

function updateCount(){
    counter.innerHTML=count
}

function increaseCount() {
    count++
    updateCount()
    validatePositiveNumber()
}

function decreaseCount() {
    if (!validatePositiveNumber()) return;
    count--
    updateCount()
}

function resetCount() {
    count = 0
    updateCount()
}

function validatePositiveNumber() {
    if (count <= 0) {
        
        warning.style.display="block"
        return false
    }
    warning.style.display="none"
    return true
}

function saveCount() {
    localStorage.setItem("count", count)
    updateCount()
}

function loadCount() {
    let saved = localStorage.getItem("count")
    if (saved !== null) {
        count = Number(saved)
    }
    updateCount()
}
