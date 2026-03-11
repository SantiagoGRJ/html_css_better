
function changeText(id){
    id.innerHTML = "Ooops!"
}


function displayDate(){
    const text = document.getElementById("demo")
    text.innerHTML=Date()
}

document.getElementById("myBtn").onclick = displayDate;

const info = document.getElementById("check-cookies")
const infotext = document.getElementById("info-cookies")
function checkCookies(){
    let text = ""
    if(navigator.cookieEnabled==true){
        text="Cookies are enabled"
    }else{
        text = "Cookies are disabled"
    }
    infotext.innerHTML=text
}


function upperCase(){
    const x = document.getElementById("fname")
    x.value = x.value.toUpperCase()
}
function upperCasee(){
    const x = document.getElementById("fnamee")
    x.value = x.value.toUpperCase()
}

// MIN-PROYECT 

function mDown(obj){
    obj.style.backgroundColor ="#1ec5e5"
    obj.innerHTML="Release Me"
}
function mUp(obj){
    obj.style.backgroundColor="#D94A38"
    obj.innerHTML="Thank you"
}