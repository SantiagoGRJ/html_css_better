const k = document.getElementById("k")

const second = document.getElementById("in01")


k.addEventListener("keydown",function (event){
    const demo = document.getElementById("demo")

    demo.innerHTML="Your pressed: "+ event.key + " and even code: "+event.code
    
})

second.addEventListener("keydown", function (event){
    const textdemo = document.getElementById("textdemo")

    if(event.code === "Enter"){
        textdemo.innerHTML="Enter was pressed!"
    }
})