const box = document.getElementById("box")
const demo = document.getElementById("demo")

box.addEventListener("mouseover",function (){
    box.innerHTML="Mouse is over me!"
})

box.addEventListener("mouseout",function (){
    box.innerHTML="Move is out!"
})

document.addEventListener("mousemove",function (event){
    demo.innerHTML="X: "+event.clientX+ " Y: "+ event.clientY
})