const clock = document.getElementById("clock")
const btn =  document.getElementById("btn")
const message = document.getElementById("demo")

// Call showTime every 1000 millisec
setInterval(showTime,1000)

function showTime(){
    const date = new Date()
    clock.innerHTML= date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
}

btn.addEventListener("click",function (){
    // Then call showMsg afther 2 seconds
    setTimeout(showMsg,2000)
})

function showMsg(){
    message.innerHTML="Hello afther 2 seconds!"
}


const btnStart = document.getElementById("start")
const btnStop = document.getElementById("stop")
let counter = document.getElementById("counter")

let myInterval;
let count = 0

btnStart.addEventListener("click",function (){
    myInterval=setInterval(Counter,1000)
})
btnStop.addEventListener("click", function (){
    clearInterval(myInterval)
})

function Counter(){
    count++
    counter.innerHTML= count;

}


